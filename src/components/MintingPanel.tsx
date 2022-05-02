/** @jsxImportSource theme-ui */
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther, parseEther } from '@ethersproject/units'
import {
  displayErrorToast,
  displaySuccessToast,
  Toast,
} from 'components/Toast'
import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { type SMPLverse } from '../contract'
import { useContract, useEthBalance } from '../hooks'
import { MintButton } from './MintButton'

interface Props {
  additional: string
  containerSize: number
}

export const MintingPanel = ({ additional, containerSize }: Props) => {
  const contract = useContract() as SMPLverse
  const balance = useEthBalance()

  const [quantity, setQuantity] = useState<number>(1)
  const [weiRequired, setWeiRequired] = useState<BigNumber>()
  const [ethRequired, setEthRequired] = useState<string>()
  const { isWaiting, setIsWaiting } = useContext(WaitingContext)

  useEffect(() => {
    if (quantity) {
      const price = BigNumber.from(parseEther('0.07'))
      const weiRequired = price.mul(quantity)
      const ethRequired = formatEther(weiRequired)
      setWeiRequired(weiRequired)
      setEthRequired(ethRequired)
    }
  }, [quantity])

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

  return (
    <>
      <MintButton
        ethRequired={ethRequired}
        onClick={mint}
        isLoading={isWaiting}
        small={false}
        additional={additional}
        containerSize={containerSize}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <Toast />
    </>
  )
}
