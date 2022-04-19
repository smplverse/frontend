/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MintCount } from './MintCount'
import { Text } from 'theme-ui'

import { Wallet } from './Wallet'

const HeaderContainer = styled.header`
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
`

export const Header = () => {
  return (
    <HeaderContainer
      sx={{
        p: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <MintCount />
      <Text>SMPLVERSE</Text>
      <Wallet />
    </HeaderContainer>
  )
}
