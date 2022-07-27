import { useBreakpointIndex } from '@theme-ui/match-media'
import { useState } from 'react'
import { Box } from 'theme-ui'

import {
  SybilFooter,
  SybilHeader,
  SybilImage,
  SybilImageLoad,
  SybilMintingPanel,
  SybilMintPageText,
} from '../components'

export const SybilMintPage = () => {
  const [minting, setMinting] = useState(true)

  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? 513 : 256

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background',
      }}
    >
      <SybilHeader onClick={() => setMinting(true)} />
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          p: [1, 3],
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {minting ? (
          <>
            <SybilImage width={x} height={x} />
          </>
        ) : (
          <SybilImageLoad />
        )}
        <SybilMintingPanel setMinting={setMinting} />
        <SybilMintPageText />
        <SybilFooter />
      </Box>
    </div>
  )
}
