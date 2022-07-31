/** @jsxImportSource theme-ui */
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther } from '@ethersproject/units'
import { useBreakpointIndex } from '@theme-ui/match-media'
import {
  displayErrorToast,
  displaySuccessToast,
  Toast,
} from 'components/Toast'
import { ContractReceipt } from 'ethers'
import keccak256 from 'keccak256'
import { useContext, useEffect, useState } from 'react'
import { Box } from 'theme-ui'

import {
  SybilFreeMintButton,
  SybilHeader,
  SybilImage,
  SybilImageLoad,
  SybilMintButton,
} from '../components'
import { WaitingContext } from '../contexts'
import { type Sybilverse } from '../contract-sybil'
import {
  useContractSybil,
  useEthBalanceSybil,
  useFreeMintCountSybil,
  useFreeMintSybil,
  useMerkleTreeSybil,
  useMintActiveSybil,
  useNumberFreeMintSybil,
  useNumberOfRemainingSybil,
} from '../hooks'

export const SybilMintingPanel = () => {
  const contract = useContractSybil() as Sybilverse
  const balance = useEthBalanceSybil()

  const [quantity, setQuantity] = useState<number>(1)
  const [weiRequired, setWeiRequired] = useState<BigNumber | 0>()
  const [ethRequired, setEthRequired] = useState<string>()
  const [txReceipt, setTxReceipt] = useState<ContractReceipt>()
  const { isWaiting, setIsWaiting } = useContext(WaitingContext)

  const [showImage, setShowImage] = useState(false)
  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? 513 : 256

  const mintActive = useMintActiveSybil()
  const mintCount = useNumberOfRemainingSybil()

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
          throw Error('Insufficient balance!')
        }
        setIsWaiting(true)
        const tx = await contract.mint(quantity, {
          value: weiRequired,
        })
        const txResult = await tx.wait()
        setTxReceipt(txResult)
        setIsWaiting(false)
        setShowImage(true)
        displaySuccessToast(tx.hash, 'dark')
      } catch (err) {
        setIsWaiting(false)
        if (err.message.includes('There are no public mint tokens left.')) {
          displayErrorToast('Not enough mints remaining!', 'dark')
        } else if (err.message) {
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
        const txResult = await tx.wait()
        setTxReceipt(txResult)
        setIsWaiting(false)
        setShowImage(true)
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
      <SybilHeader onClick={() => setShowImage(false)} />
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          p: [1, 3],
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {!showImage ? (
          <>
            <SybilImage width={x} height={x} />
          </>
        ) : (
          <SybilImageLoad txReceipt={txReceipt} />
        )}
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
        ) : mintActive != false && mintCount != 0 ? (
          <SybilMintButton
            ethRequired={ethRequired}
            onClick={mint}
            isLoading={isWaiting}
            small={false}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ) : null}
      </Box>
      <Toast />
    </>
  )
}
