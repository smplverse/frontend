/** @jsxImportSource theme-ui */
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther, parseEther } from '@ethersproject/units'
import { useBreakpointIndex } from '@theme-ui/match-media'
import {
  displayErrorToast,
  displaySuccessToast,
  Toast,
} from 'components/Toast'
import { useChainId, useIsActive, useProvider } from 'connectors/metamask'
import { useEffect, useState } from 'react'
import { Flex, Text } from 'theme-ui'

import { CHAIN_ID } from '../constants'
import { type SMPLverse } from '../contract'
import { useContract } from '../hooks'
import { CenteredColumn, CenteredRow } from './Flex'
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
  const index = useBreakpointIndex()

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
      displayErrorToast('Invalid network!', 'colored')
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
        displaySuccessToast(tx.hash, 'colored')
      } catch (err) {
        setIsLoading(false)
        if (err?.message) {
          displayErrorToast(err.message, 'colored')
        } else {
          displayErrorToast(err, 'colored')
        }
      }
    }
  }

  // const fontSize = useResponsiveValue([2, 2, 2, 6])

  const increment = () => {
    if (quantity < 7667) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <>
      <CenteredColumn>
        {isActive ? (
          <>
            <br />
            {index > 2 ? (
              <CenteredRow>
                <Flex
                  onClick={decrement}
                  style={{
                    cursor: 'pointer',
                    userSelect: 'none',
                    fontSize: 20,
                  }}
                >
                  ⊟ &nbsp;
                </Flex>
                <MintButton
                  ethRequired={ethRequired}
                  onClick={mint}
                  isLoading={isLoading}
                  small={false}
                  quantity={quantity}
                />
                <Flex
                  onClick={increment}
                  style={{
                    cursor: 'pointer',
                    userSelect: 'none',
                    fontSize: 20,
                  }}
                >
                  &nbsp; ⊞
                </Flex>
              </CenteredRow>
            ) : (
              <CenteredRow>
                <Flex
                  onClick={decrement}
                  style={{
                    cursor: 'pointer',
                    userSelect: 'none',
                    fontSize: 20,
                  }}
                >
                  ⊟ &nbsp;
                </Flex>
                <MintButton
                  ethRequired={ethRequired}
                  onClick={mint}
                  isLoading={isLoading}
                  small={false}
                  quantity={quantity}
                />
                <Flex
                  onClick={increment}
                  style={{
                    cursor: 'pointer',
                    userSelect: 'none',
                    fontSize: 20,
                  }}
                >
                  &nbsp; ⊞
                </Flex>
              </CenteredRow>
            )}
          </>
        ) : (
          <div
            style={{
              height: 40,
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'column',
            }}
          >
            <Text>FRIDAY JUNE 24, 12PM PT</Text>
          </div>
        )}
      </CenteredColumn>
      <Toast />
    </>
  )
}
