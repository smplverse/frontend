/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Centered } from 'components/Flex'
import { MouseEventHandler } from 'react'
import { Spinner, Text } from 'theme-ui'

import { CHAIN_ID } from '../constants'
import { useChainId, useIsActive } from '../hooks'
import { ButtonContainer } from './ButtonContainer'
import { Wallet } from './Wallet'

interface Props {
  ethRequired: string | undefined
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
  small: boolean
  quantity: number
  additional: string
  containerSize: number
  setQuantity: (quantity: number) => void
}

const PlusMinusContainer = styled.div`
  &:hover {
    filter: invert(1);
  }
  cursor: pointer;
  user-select: none;
  font-size: 20;
`

const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
`

export const MintButton = ({
  ethRequired,
  onClick,
  isLoading,
  quantity,
  additional,
  containerSize,
  setQuantity,
}: Props) => {
  // const fontSize = useResponsiveValue([2, 2, 2, 6])

  const isActive = useIsActive()
  const chainId = useChainId()

  const MintButtonContainer = styled(ButtonContainer)`
    width: ${containerSize}px;
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
                    ⊟ &nbsp;
                  </PlusMinusContainer>
                  <InvertOnHover>
                    <Text onClick={onClick}>
                      MINT {quantity} {additional} FOR Ξ{ethRequired}
                    </Text>
                  </InvertOnHover>
                  <PlusMinusContainer onClick={increment}>
                    &nbsp; ⊞
                  </PlusMinusContainer>
                </>
              ) : (
                <Wallet onClick={() => null} />
              )}
            </>
          )}
        </Centered>
      </MintButtonContainer>
    </>
  )
}
