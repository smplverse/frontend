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
  onClick: MouseEventHandler<HTMLDivElement>
  isLoading: boolean
}

const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
  font-family: 'Helvetica Neue', sans-serif;
`

export const SybilFreeMintButton = ({ onClick, isLoading }: Props) => {
  // const fontSize = useResponsiveValue([2, 2, 2, 6])

  const isActive = useIsActive()

  const chainId = useChainId()

  const MintButtonContainer = styled(ButtonContainer)`
    width: 226px;
    background-color: hotpink;
    font-family: 'Helvetica Neue', sans-serif;
  `

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
                  <InvertOnHover>
                    <Text onClick={onClick} color="text">
                      FREE ALLOWLIST MINT
                    </Text>
                  </InvertOnHover>
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
