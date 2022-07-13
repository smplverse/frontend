/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'
import { MouseEventHandler } from 'react'
import { Box, Button } from 'theme-ui'

import { MintCount } from './MintCount'
import { SmplverseButton } from './SmplverseButton'
import { Wallet } from './Wallet'
import { useRouter } from 'next/router'

const HeaderContainer = styled.header`
  color: #ffffff;
  font-family: 'IBM Plex Mono', monospace;
`

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>
}

export const Header = ({ onClick }: Props) => {
  const [colorMode, setColorMode] = useColorMode()
  const router = useRouter()

  const goSybil = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
    router.push('/sybilverse')
  }

  return (
    <HeaderContainer
      sx={{
        p: [2, 4],
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        mb: [3, 0],
        mt: [2, 0],
      }}
    >
      <Box sx={{ flex: 1 }}>
        <MintCount />
      </Box>
      <Box sx={{ flex: 1 }}>
        <SmplverseButton onClick={onClick} text="SMPLVERSE" />
        <Button onClick={goSybil}>go sybil</Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Wallet onClick={onClick} />
      </Box>
    </HeaderContainer>
  )
}
