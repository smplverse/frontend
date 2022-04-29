/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'

import { MintPage } from '../pages/MintPage'
import { MintCount } from './MintCount'
import { SmplverseButton } from './SmplverseButton'
import { Wallet } from './Wallet'

const HeaderContainer = styled.header`
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
`

const MintPageRefresh = () => {
  return <MintPage />
}

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
      <SmplverseButton onClick={MintPageRefresh} text="SMPLVERSE" />
      <Wallet />
    </HeaderContainer>
  )
}
