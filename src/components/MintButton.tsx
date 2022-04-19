/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Centered } from 'components/Flex'
import { MouseEventHandler } from 'react'
import { Spinner, Text, Flex } from 'theme-ui'

interface Props {
  ethRequired: string | undefined
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
  small: boolean
  quantity: number
  setQuantity: (quantity: number) => void
}

const MintButtonContainer = styled.div`
  user-select: none;
  cursor: pointer;
  height: 50px;
  border: 1px solid #008f11;
  color: #008f11;
  width: 256px;
  padding: 0.75rem 0;
  border-radius: 1rem;
  margin-top: 2rem;
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
          )}
        </Centered>
      </MintButtonContainer>
    </>
  )
}
