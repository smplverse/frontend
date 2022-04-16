/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Centered } from 'components/Flex'
import { MouseEventHandler } from 'react'
import { Spinner, Text } from 'theme-ui'

interface Props {
  ethRequired: string | undefined
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
  small: boolean
  quantity: string | number
}

const MintButtonContainer = styled.div`
  user-select: none;
  cursor: pointer;
`

const SmallMintButtonContainer = styled(MintButtonContainer)`
  width: calc(426px * 0.5);
  height: calc(75px * 0.5);
`

export const MintButton = ({
  ethRequired,
  onClick,
  isLoading,
  small,
  quantity,
}: Props) => (
  <>
    {!small ? (
      <MintButtonContainer onClick={onClick}>
        <Centered>
          {isLoading ? (
            <Spinner color="green" size={20} />
          ) : (
            <Text>
              MINT {quantity} FOR Ξ{ethRequired}
            </Text>
          )}
        </Centered>
      </MintButtonContainer>
    ) : (
      <SmallMintButtonContainer onClick={onClick}>
        <Centered>
          {isLoading ? (
            <Spinner color="green" size={20} />
          ) : (
            <Text>MINT 1 FOR {ethRequired}Ξ</Text>
          )}
        </Centered>
      </SmallMintButtonContainer>
    )}
  </>
)
