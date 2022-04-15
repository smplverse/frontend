/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Centered } from 'components/Flex'
import { MouseEventHandler } from 'react'
import { Spinner, Text } from 'theme-ui'

import { colors } from '../theme'

interface Props {
  ethRequired: string | undefined
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
  small: boolean
}

const MintButtonContainer = styled.div`
  background: ${colors.red};
  user-select: none;
  cursor: pointer;
  width: 426px;
  height: 75px;
`

const SmallMintButtonContainer = styled(MintButtonContainer)`
  width: calc(426px * 0.5);
  height: calc(75px * 0.5);
`

const MintButton = ({ ethRequired, onClick, isLoading, small }: Props) => (
  <>
    {!small ? (
      <MintButtonContainer onClick={onClick}>
        <Centered>
          {isLoading ? (
            <Spinner color="white" size={34} />
          ) : (
            <Text sx={{ color: 'white', fontSize: 40 }}>
              Mint {ethRequired && <>({ethRequired} ETH)</>}
            </Text>
          )}
        </Centered>
      </MintButtonContainer>
    ) : (
      <SmallMintButtonContainer onClick={onClick}>
        <Centered>
          {isLoading ? (
            <Spinner color="white" size={20} />
          ) : (
            <Text sx={{ color: 'white', fontSize: 20 }}>
              Mint {ethRequired && <>({ethRequired} ETH)</>}
            </Text>
          )}
        </Centered>
      </SmallMintButtonContainer>
    )}
  </>
)

export default MintButton
