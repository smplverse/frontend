/** @jsxImportSource theme-ui */
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther, parseEther } from '@ethersproject/units'
import { useBreakpointIndex, useResponsiveValue } from '@theme-ui/match-media'
import Toast, {
  displayErrorToast,
  displaySuccessToast,
} from 'components/Toast'
import { useChainId, useIsActive, useProvider } from 'connectors/metamask'
import { useEffect, useState } from 'react'
import { Box, Heading, Input } from 'theme-ui'

import { CHAIN_ID } from '../constants'
import { type SMPLverse } from '../contract'
import { useContract } from '../hooks/useContract'
import { CenteredColumn } from './Flex'
import MintButton from './MintButton'

const MintingWindow = () => {
  const contract = useContract() as SMPLverse
  const provider = useProvider()
  const isActive = useIsActive()

  const [quantity, setQuantity] = useState<number>(5)
  const [balance, setBalance] = useState<BigNumber>()
  const [weiRequired, setWeiRequired] = useState<BigNumber>()
  const [ethRequired, setEthRequired] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const chainId = useChainId()
  const index = useBreakpointIndex()

  useEffect(() => {
    if (quantity) {
      const price = BigNumber.from(parseEther('0.024'))
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

  const fontSize = useResponsiveValue([2, 2, 2, 6])

  return (
    <>
      <CenteredColumn>
        {isActive ? (
          <>
            <Box sx={{ my: index > 2 ? 4 : 0 }}>
              <Input
                value={quantity}
                onChange={(e) => setQuantity(e.target.valueAsNumber)}
              />
            </Box>
            {index > 2 && (
              <Box>
                <MintButton
                  ethRequired={ethRequired}
                  onClick={mint}
                  isLoading={isLoading}
                  small={false}
                />
              </Box>
            )}
          </>
        ) : (
          <Heading sx={{ fontSize, color: 'black', textAlign: 'center' }}>
            Connect wallet to get started
          </Heading>
        )}
        <Toast />
      </CenteredColumn>
      {index < 3 && isActive && (
        <Box sx={{ mt: 4 }}>
          <MintButton
            ethRequired={ethRequired}
            onClick={mint}
            isLoading={isLoading}
            small
          />
        </Box>
      )}
    </>
  )
}

export default MintingWindow
