/** @jsxImportSource theme-ui */
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther, parseEther } from '@ethersproject/units'
import {
  displayErrorToast,
  displaySuccessToast,
  Toast,
} from 'components/Toast'
import { useChainId, useIsActive, useProvider } from 'connectors/metamask'
import { useEffect, useState } from 'react'
import { Text } from 'theme-ui'

import { CHAIN_ID } from '../constants'
import { type SMPLverse } from '../contract'
import { useContract } from '../hooks'
import { MintButton } from './MintButton'

export const MintingPanel = () => {
  const contract = useContract() as SMPLverse
  const provider = useProvider()
  const isActive = useIsActive()

  const [quantity, setQuantity] = useState<number>(1)
  const [balance, setBalance] = useState<BigNumber>()
  const [weiRequired, setWeiRequired] = useState<BigNumber>()
  const [ethRequired, setEthRequired] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const chainId = useChainId()

  useEffect(() => {
    if (quantity) {
      const price = BigNumber.from(parseEther('0.07'))
      const weiRequired = price.mul(quantity)
      const ethRequired = formatEther(weiRequired)
      setWeiRequired(weiRequired)
      setEthRequired(ethRequired)
    }
  }, [quantity])

  useEffect(() => {
    const getBalance = async () => {
      if (isActive && provider && contract.signer && chainId === 4) {
        const signerAddress = await contract.signer.getAddress()
        setBalance(await provider.getBalance(signerAddress))
      }
    }
    getBalance()
  }, [isActive, contract, provider, chainId])

  const mint = async () => {
    if (chainId && chainId !== CHAIN_ID) {
      displayErrorToast('Invalid network!', 'dark')
      return
    }
    if (contract.signer && weiRequired && balance) {
      try {
        if (weiRequired.gt(balance)) {
          throw Error('Insufficient balance!')
        }
        setIsLoading(true)
        const tx = await contract.mint(quantity, {
          value: weiRequired,
        })
        await tx.wait()
        setIsLoading(false)
        displaySuccessToast(tx.hash, 'dark')
      } catch (err) {
        setIsLoading(false)
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
        onClick={mint}
        isLoading={isLoading}
        small={false}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <Toast />
    </>
  )
}
