/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MintCount } from './MintCount'
import { Wallet } from './Wallet'
import { MintPage } from '../pages/MintPage'
import { SmplverseButton } from './SmplverseButton'

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
