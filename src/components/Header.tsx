/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MintCount } from './MintCount'
import { Wallet } from './Wallet'
import { SmplverseButton } from './SmplverseButton'
import { MouseEventHandler } from 'react'

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
