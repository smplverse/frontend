/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Centered } from 'components/Flex'
import { MouseEventHandler } from 'react'
import { Spinner, Text } from 'theme-ui'

import { CHAIN_ID } from '../constants-sybil'
import { useChainId, useIsActive } from '../hooks'
import { ButtonContainer } from './ButtonContainer'
import { SybilWallet } from './SybilWallet'

interface Props {
  ethRequired: string | undefined
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
  small: boolean
  quantity: number
  setQuantity: (quantity: number) => void
}

const PlusMinusContainer = styled.div`
  &:hover {
    filter: invert(1);
  }
  cursor: pointer;
  user-select: none;
  font-size: 20;
  font-family: 'Helvetica Neue', sans-serif;
`

const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
  font-family: 'Helvetica Neue', sans-serif;
`

export const SybilMintButton = ({
  ethRequired,
  onClick,
  isLoading,
  quantity,
  setQuantity,
}: Props) => {
  // const fontSize = useResponsiveValue([2, 2, 2, 6])

  const isActive = useIsActive()

  const chainId = useChainId()

  const MintButtonContainer = styled(ButtonContainer)`
    width: 226px;
    background-color: hotpink;
    font-family: 'Helvetica Neue', sans-serif;
  `
  const increment = () => {
    if (quantity < 10) {
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
      <MintButtonContainer>
        <Centered>
          {isLoading ? (
            <Spinner color="black" size={20} />
          ) : (
            <>
              {isActive && chainId === CHAIN_ID ? (
                <>
                  <PlusMinusContainer onClick={decrement}>
                    <Text color="text">⊟ &nbsp;</Text>
                  </PlusMinusContainer>
                  <InvertOnHover>
                    <Text onClick={onClick} color="text">
                      MINT {quantity} {''} FOR Ξ{ethRequired}
                    </Text>
                  </InvertOnHover>
                  <PlusMinusContainer onClick={increment}>
                    <Text color="text">&nbsp; ⊞</Text>
                  </PlusMinusContainer>
                </>
              ) : (
                <SybilWallet onClick={() => null} />
              )}
            </>
          )}
        </Centered>
      </MintButtonContainer>
    </>
  )
}
