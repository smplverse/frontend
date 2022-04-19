/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Centered } from 'components/Flex'
import { MouseEventHandler } from 'react'
import { Spinner, Text } from 'theme-ui'

import { metaMask, useIsActive } from '../connectors/metamask'
import { ConnectButton } from './ConnectButton'
import { ButtonContainer } from './ButtonContainer'

interface Props {
  ethRequired: string | undefined
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
  small: boolean
  quantity: number
  setQuantity: (quantity: number) => void
}

const MintButtonContainer = styled(ButtonContainer)`
  width: 256px;
`

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
  setQuantity,
}: Props) => {
  // const fontSize = useResponsiveValue([2, 2, 2, 6])

  const isActive = useIsActive()

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
      <MintButtonContainer>
        <Centered>
          {isLoading ? (
            <Spinner color="green" size={20} />
          ) : (
            <>
              {isActive ? (
                <>
                  <PlusMinusContainer onClick={decrement}>
                    ⊟ &nbsp;
                  </PlusMinusContainer>
                  <InvertOnHover>
                    <Text onClick={onClick}>
                      MINT {quantity} FOR Ξ{ethRequired}
                    </Text>
                  </InvertOnHover>
                  <PlusMinusContainer onClick={increment}>
                    &nbsp; ⊞
                  </PlusMinusContainer>
                </>
              ) : (
                <ConnectButton
                  onClick={async () => await metaMask.activate()}
                  text="CONNECT TO MINT"
                />
              )}
            </>
          )}
        </Centered>
      </MintButtonContainer>
    </>
  )
}
