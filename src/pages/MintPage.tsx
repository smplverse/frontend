/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui'

import Header from '../components/Header'
import MintingWindow from '../components/MintingWindow'

export const MintPage = () => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'background',
    }}
  >
    <Header />
    <Box
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        p: 3,
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <MintingWindow />
    </Box>
  </div>
)
