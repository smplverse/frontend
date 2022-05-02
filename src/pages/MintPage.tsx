import styled from '@emotion/styled'
import { ButtonContainer } from 'components/ButtonContainer'
import { useState } from 'react'
import { Box, Spinner, Text } from 'theme-ui'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`

const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
`
const Container = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  color: 'green';
  text-justify: center;
  width: 512px;
  text-align: center;
  margin-top: 10px;
  & > span {
    margin-top: 25px;
  }
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
      <Header onClick={() => setMinting(true)} />
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
          </>
        ) : (
          <WebcamCapture />
        )}
        {isActive && (
          <>
            {tokenBalance !== undefined ? (
              <>
                {tokenBalance > 0 && (
                  <>
                    {minting ? (
                      <>
                        <ClaimMenuButton onClick={() => setMinting(!minting)}>
                          <InvertOnHover>TOGGLE WEBCAM VIEW</InvertOnHover>
                        </ClaimMenuButton>

                        <Container>
                          <Text color={'white'}>TOKENS AVAILABLE:</Text>{' '}
                          <b>{tokenBalance}</b>
                        </Container>
                      </>
                    ) : (
                      <Container>
                        <Text color={'white'}>TOKENS AVAILABLE:</Text>{' '}
                        <b>{tokenBalance}</b>
                      </Container>
                    )}
                  </>
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
        <MintingPanel />
        <MintPageText />
        <Footer />
      </Box>
    </div>
  )
}
