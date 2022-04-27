import styled from '@emotion/styled'
import { ButtonContainer } from 'components/ButtonContainer'
import { useState } from 'react'
import { Box, Spinner } from 'theme-ui'

import {
  Footer,
  Header,
  MintingPanel,
  MintPageText,
  MintTime,
  SmplImage,
  WebcamCapture,
} from '../components'
import { useIsActive, useTokenBalance } from '../hooks'

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
  const tokenBalance = useTokenBalance()
  const [minting, setMinting] = useState(true)
  const isActive = useIsActive()
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
        {minting || tokenBalance === 0 ? (
          <>
            <SmplImage />
            <MintTime />
            <MintingPanel />
          </>
        ) : (
          <WebcamCapture />
        )}
        {isActive && (
          <>
            {tokenBalance !== undefined ? (
              <>
                {tokenBalance > 0 && (
                  <ClaimMenuButton onClick={() => setMinting(!minting)}>
                    TOKENS AVAILABLE: <b>{tokenBalance}</b>
                    CLICK HERE TO TOGGLE WEBCAM VIEW
                  </ClaimMenuButton>
                )}
              </>
            ) : (
              <>
                <div style={{ marginTop: 25 }} />
                <Spinner />
                <div style={{ marginTop: 15 }} />
                checking available tokens...
              </>
            )}
          </>
        )}
        <MintPageText />
        <Footer />
      </Box>
    </div>
  )
}
