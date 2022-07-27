/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { MouseEventHandler, useEffect } from 'react'
import { useColorMode } from 'theme-ui'
import { Box, IconButton } from 'theme-ui'

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
  const [_, setColorMode] = useColorMode()
  const router = useRouter()

  useEffect(() => {
    if (setColorMode) {
      setColorMode('light')
    }
  }, [setColorMode])

  const goSybil = () => {
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
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={goSybil}
          sx={{
            color: 'text',
            cursor: 'pointer',
            borderRadius: 'circle',
            transition: 'box-shadow .125s ease-in-out',
            ':hover': {
              boxShadow: '0 0 0 2px',
              outline: 'none',
            },
            mr: 4,
          }}
        >
          <svg viewBox="0 0 32 32" width={20} height={20} fill="currentcolor">
            <circle
              cx={16}
              cy={16}
              r={14}
              fill="none"
              stroke="currentcolor"
              strokeWidth={4}
            />
            <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
          </svg>
        </IconButton>
        <Wallet onClick={onClick} />
      </Box>
    </HeaderContainer>
  )
}
