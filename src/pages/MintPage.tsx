/** @jsxImportSource theme-ui */
import { Box, Text } from 'theme-ui'

import Header from '../components/Header'
import { MintingPanel } from '../components/MintingPanel'
import { MintPageFooter } from '../components/MintPageFooter'
import { MintPageText } from '../components/MintPageText'
import { SmplImage } from '../components/SmplImage'

export const MintPage = () => {
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
        <SmplImage />
        <div className="blocktext">
          <br />
          <div className="mint">
            <Text>7667 / 7667</Text>
            <Text>Ξ0.07</Text>
            <MintingPanel />
          </div>
        </div>
        <MintPageText />
        <MintPageFooter />
      </Box>
    </div>
  )
}
