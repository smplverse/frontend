import { useState } from 'react'
import styled from '@emotion/styled'
import { ButtonContainer } from 'components/ButtonContainer'
import { useTokenBalance } from 'hooks/useTokenBalance'
import { Box } from 'theme-ui'

import {
  Footer,
  Header,
  MintingPanel,
  MintPageText,
  MintTime,
  SmplImage,
  WebcamCapture,
} from '../components'

const ClaimMenuButton = styled(ButtonContainer)`
  width: 230px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const MintPage = () => {
  const balance = useTokenBalance()
  const [minting, setMinting] = useState(true)
  // TODO
  // pre-fetch all of the blockchain data during the intro page
  return (
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
        {minting ? (
          <>
            <SmplImage />
            <MintTime />
            <MintingPanel />
          </>
        ) : (
          <WebcamCapture />
        )}
        {balance > 0 && (
          <ClaimMenuButton onClick={() => setMinting(!minting)}>
            tokens available: <b>{balance}</b>
            press here to toggle claim menu
          </ClaimMenuButton>
        )}
        <MintPageText />
        <Footer />
      </Box>
    </div>
  )
}
