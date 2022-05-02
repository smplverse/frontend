/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'

import { MintCount } from './MintCount'
import { SmplverseButton } from './SmplverseButton'
import { Wallet } from './Wallet'

const HeaderContainer = styled.header`
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
`

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>
}

export const Header = ({ onClick }: Props) => {
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
      <SmplverseButton onClick={onClick} text="SMPLVERSE" />
      <Wallet onClick={onClick} />
    </HeaderContainer>
  )
}
