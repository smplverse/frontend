import { Box } from 'theme-ui'

import {
  SybilFooter,
  SybilMintingPanel,
  SybilMintPageText,
} from '../components'

export const SybilMintPage = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background',
      }}
    >
      <SybilMintingPanel />
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          p: [1, 3],
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <SybilMintPageText />
        <SybilFooter />
      </Box>
    </div>
  )
}
