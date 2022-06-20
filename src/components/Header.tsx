/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { MouseEventHandler } from 'react'

import { MintCount } from './MintCount'
import { SmplverseButton } from './SmplverseButton'
import { Wallet } from './Wallet'

const HeaderContainer = styled.header`
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
`

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
`

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>
}

export const Header = ({ onClick }: Props) => {
  const breakpointIndex = useBreakpointIndex()
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
      {breakpointIndex === 0 ? (
        <MobileContainer>
          <SmplverseButton onClick={onClick} text="SMPLVERSE" />
          <Wallet onClick={onClick} />
        </MobileContainer>
      ) : (
        <>
          <SmplverseButton onClick={onClick} text="SMPLVERSE" />
          <Wallet onClick={onClick} />
        </>
      )}
    </HeaderContainer>
  )
}
