import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { ButtonContainer } from 'components/ButtonContainer'
import { useState } from 'react'
import { Box, Spinner, Text } from 'theme-ui'

import {
  SybilCopyright,
  SybilFooter,
  SybilHeader,
  SybilImage,
  SybilMintingPanel,
  SybilMintPageText,
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

const WaitingIndicator = () => (
  <>
    <Box
      sx={{
        mt: 3,
        mb: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Spinner />
      <Text sx={{ mt: 3 }}>checking available tokens...</Text>
    </Box>
  </>
)

export const SybilMintPage = () => {
  const tokenBalance = useTokenBalance()
  const [minting, setMinting] = useState(true)
  const isActive = useIsActive()

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
        <SybilImage width={x} height={x} />
        {isActive && (
          <>
            {tokenBalance === undefined ? (
              <WaitingIndicator />
            ) : (
              <>
                {Boolean(tokenBalance) && (
                  <>
                    {minting && (
                      <ClaimMenuButton onClick={() => setMinting(!minting)}>
                        <InvertOnHover>TOGGLE WEBCAM VIEW</InvertOnHover>
                      </ClaimMenuButton>
                    )}
                    <Container>
                      <Text>TOKENS AVAILABLE:</Text> <b>{tokenBalance}</b>
                    </Container>
                  </>
                )}
              </>
            )}
          </>
        )}
        <SybilMintingPanel />
        <SybilMintPageText />
        <SybilFooter />
        <SybilCopyright />
      </Box>
    </div>
  )
}
