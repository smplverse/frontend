/** @jsxImportSource theme-ui */
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import {
  displayErrorToast,
  displaySuccessToast,
  Toast,
} from 'components/Toast'
import keccak256 from 'keccak256'
import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { type Sybilverse } from '../contract-sybil'
import {
  useContractSybil,
  useEthBalanceSybil,
  useFreeMintCountSybil,
  useFreeMintSybil,
  useMerkleTreeSybil,
  useNumberFreeMintSybil,
} from '../hooks'
import { SybilFreeMintButton } from './SybilFreeMintButton'
import { SybilMintButton } from './SybilMintButton'

export const SybilMintingPanel = () => {
  const contract = useContractSybil() as Sybilverse
  const balance = useEthBalanceSybil()

  const [quantity, setQuantity] = useState<number>(1)
  const [weiRequired, setWeiRequired] = useState<BigNumber | 0>()
  const [ethRequired, setEthRequired] = useState<string>()
  const { isWaiting, setIsWaiting } = useContext(WaitingContext)

  const numberFreeMint = useNumberFreeMintSybil()
  const freeMintCount = useFreeMintCountSybil()
  const freeMintActive = useFreeMintSybil()
  const merkleTree = useMerkleTreeSybil()

  useEffect(() => {
    ;(async () => {
      if (quantity && contract) {
        const price = await contract.getMintPrice()
        const weiRequired = price.mul(quantity)
        const ethRequired = formatEther(weiRequired)
        setWeiRequired(weiRequired)
        setEthRequired(ethRequired)
      }
    })()
  }, [quantity, contract])

  const mint = async () => {
    if (contract.signer && weiRequired && balance) {
      try {
        if (weiRequired.gt(balance)) {
          throw Error('insufficient balance!')
        }
        setIsWaiting(true)
        const tx = await contract.mint(quantity, {
          value: weiRequired,
        })
        await tx.wait()
        setIsWaiting(false)
        displaySuccessToast(tx.hash, 'dark')
      } catch (err) {
        setIsWaiting(false)
        if (err?.message) {
          displayErrorToast(err.message, 'dark')
        } else {
          displayErrorToast(err, 'dark')
        }
      }
    }
  }

  const freeMint = async () => {
    if (contract.signer && merkleTree && freeMintActive) {
      try {
        if (numberFreeMint === 0) {
          throw Error('Free mint is sold out!')
        }
        if (freeMintCount != undefined && freeMintCount > 0) {
          throw Error('You already minted your free Sybil!')
        }
        setIsWaiting(true)
        const leaf = keccak256(await contract.signer.getAddress())
        const proof = merkleTree.getHexProof(leaf)
        const tx = await contract.freeMint(proof)
        await tx.wait()
        setIsWaiting(false)
        displaySuccessToast(tx.hash, 'dark')
      } catch (err) {
        setIsWaiting(false)
        if (err.message.includes('cannot estimate gas')) {
          displayErrorToast('This wallet is not on the allowlist!', 'dark')
        } else if (err.message) {
          displayErrorToast(err.message, 'dark')
        } else {
          displayErrorToast(err, 'dark')
        }
      }
    }
  }

  return (
    <>
      {freeMintActive === true &&
      numberFreeMint != undefined &&
      numberFreeMint > 0 ? (
        <>
          <SybilFreeMintButton onClick={freeMint} isLoading={isWaiting} />
          <SybilMintButton
            ethRequired={ethRequired}
            onClick={mint}
            isLoading={isWaiting}
            small={false}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </>
      ) : (
        <SybilMintButton
          ethRequired={ethRequired}
          onClick={mint}
          isLoading={isWaiting}
          small={false}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
      <Toast />
    </>
  )
}
