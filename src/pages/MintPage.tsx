import styled from '@emotion/styled'
import { ButtonContainer } from 'components/ButtonContainer'
import { useState } from 'react'
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
import { useTokenBalance } from '../hooks'

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
        {tokenBalance > 0 && (
          <ClaimMenuButton onClick={() => setMinting(!minting)}>
            tokens available: <b>{tokenBalance}</b>
            press here to toggle claim menu
          </ClaimMenuButton>
        )}
        <MintPageText />
        <Footer />
      </Box>
    </div>
  )
}
