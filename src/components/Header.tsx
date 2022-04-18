/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MintCount } from './MintCount'
import { Text } from 'theme-ui'

import { Wallet } from './Wallet'

const HeaderContainer = styled.header``

const WalletContainer = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
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
      <WalletContainer>
        <Wallet />
      </WalletContainer>
    </HeaderContainer>
  )
}
