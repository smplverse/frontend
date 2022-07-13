/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'

import { MintCount } from './MintCount'
import { SmplverseButton } from './SmplverseButton'
import { Wallet } from './Wallet'

import { Box } from 'theme-ui'

const HeaderContainer = styled.header`
  color: #ffffff;
  font-family: 'Chalkduster', fantasy;
`

interface Props {
  onClick: MouseEventHandler<HTMLDivElement>
}

export const SybilHeader = ({ onClick }: Props) => {
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
        <SmplverseButton onClick={onClick} text="SYBILVERSE" />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Wallet onClick={onClick} />
      </Box>
    </HeaderContainer>
  )
}
