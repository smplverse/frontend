/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { Box, Text } from 'theme-ui'

import smpl from '../assets/smpl.png'
import Header from '../components/Header'
import MintingWindow from '../components/MintingWindow'
import { CenteredRow } from '../components/Flex'

const SmplImage = styled.div`
  background: url(${smpl});
  background-size: contain;
  width: 512px;
  height: 512px;
`

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
      <SmplImage />
      <div className="blocktext">
        <br />
        <div className="mint">
          <Text>7667 / 7667</Text>
          <Text>Ξ0.07</Text>
          <Text>FRIDAY JUNE 24, 12PM PT</Text>
        </div>
      </div>
      <p className="blocktext">
        NOTE ON DATA COLLECTION:
        <br />
        <br />
        WE CALCULATE A 128-DIMENSIONAL VECTOR FROM YOUR IMAGE AND USE THIS
        ENCODING TO COMPARE AGAINST THE SMPLVERSE. NO PERSONAL DATA IS STORED
        ON OUR SERVER.
      </p>
      <p className="blocktext">
        <br />
        THE SMPLVERSE IS AN NFT COLLECTION OF SYNTHETIC FACIAL TRAINING DATA
        FROM THE COMPUTATIONAL INFRASTRUCTURE OF THE METAVERSE.
        <br />
        <br />
        THESE PFPS WERE PROCEDURALLY-GENERATED USING SMPL—A BODY MESH USED TO
        ANIMATE AVATARS IN MIXED REALITY FROM SPARSE INPUTS—AS THE BASIS FOR
        NEW ALGORITHMS THAT WILL IMPROVE FACE AND GESTURE TRACKING IN VIRTUAL
        ENVIRONMENTS.
        <br />
        <br />
        AS A MINTER, YOU SUBMIT A FACE IMAGE WITH YOUR WEBCAM OR VIA UPLOAD,
        WHICH A FACE RECOGNITION MODEL USES TO FIND THE CLOSEST MATCHING IMAGE
        IN THE SMPLVERSE COLLECTION.
        <br />
        <br />
        AFTER APPROVING THE MINT TRANSACTION, BOTH IMAGES ARE HASHED AND
        WRITTEN TO THE [TOKEN ?].
        <br />
        <br />
        WHEN THE IMAGE IS SUBMITTED, IT RECEIVES ONE ATTRIBUTE FROM THE MODEL:
        CONFIDENCE.
        <br />
        <br />
        CONFIDENCE IS A DECLINING MEASURE: AS MORE IMAGES ARE MINTED, YOUR
        LIKELIHOOD OF RECEIVING A HIGH CONFIDENCE MATCH DECREASES.
        <br />
        <br />
        CONVERSELY, YOUR LIKELIHOOD OF RECEIVING AN IMAGE WITH RARER VISUAL
        ATTRIBUTES INCREASES.
      </p>
      <CenteredRow>
        <img
          src="https://etherscan.io/images/brandassets/etherscan-logo-light-circle.png"
          width={30}
          height={30}
          alt="etherscan"
        />
      </CenteredRow>
    </Box>
  </div>
)
