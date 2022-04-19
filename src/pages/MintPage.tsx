import { Box } from 'theme-ui'

import {
  Footer,
  Header,
  MintingPanel,
  MintPageText,
  SmplImage,
  MintTime,
} from '../components'

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
        <MintTime />
        <MintingPanel />
        <MintPageText />
        <Footer />
      </Box>
    </div>
  )
}
