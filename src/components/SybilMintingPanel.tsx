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
import { type SMPLverse } from '../contract'
import {
  useContract,
  useEthBalance,
  useMerkleTree,
  useWhitelistToggled,
} from '../hooks'
import { MintButton } from './MintButton'

export const SybilMintingPanel = () => {
  const contract = useContract() as SMPLverse
  const balance = useEthBalance()

  const [quantity, setQuantity] = useState<number>(1)
  const [weiRequired, setWeiRequired] = useState<BigNumber>()
  const [ethRequired, setEthRequired] = useState<string>()
  const { isWaiting, setIsWaiting } = useContext(WaitingContext)

  const whitelistToggled = useWhitelistToggled()
  const merkleTree = useMerkleTree()

  useEffect(() => {
    ;(async () => {
      if (quantity && contract) {
        if (whitelistToggled === true) {
          const price = await contract.whitelistMintPrice()
          const weiRequired = price.mul(quantity)
          const ethRequired = formatEther(weiRequired)
          setWeiRequired(weiRequired)
          setEthRequired(ethRequired)
        } else if (whitelistToggled === false) {
          const price = await contract.mintPrice()
          const weiRequired = price.mul(quantity)
          const ethRequired = formatEther(weiRequired)
          setWeiRequired(weiRequired)
          setEthRequired(ethRequired)
        }
      }
    })()
  }, [quantity, contract, whitelistToggled])

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

  const whitelistMint = async () => {
    if (
      contract.signer &&
      merkleTree &&
      whitelistToggled &&
      weiRequired &&
      balance
    ) {
      try {
        if (weiRequired.gt(balance)) {
          throw Error('insufficient balance!')
        }
        setIsWaiting(true)
        const leaf = keccak256(await contract.signer.getAddress())
        const proof = merkleTree.getHexProof(leaf)
        const tx = await contract.whitelistMint(quantity, proof, {
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

  return (
    <>
      <MintButton
        ethRequired={ethRequired}
        onClick={whitelistToggled ? whitelistMint : mint}
        isLoading={isWaiting}
        small={false}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <Toast />
    </>
  )
}
