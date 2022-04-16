/** @jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { CenteredColumn } from 'components/Flex'
import { Box } from 'theme-ui'

import smpl from '../assets/smpl.png'
import Header from '../components/Header'
import MintingWindow from '../components/MintingWindow'

const SmplImage = styled.div`
  background: url(${smpl});
  background-size: contain;
  width: 300px;
  height: 300px;
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
        flexDirection: 'row',
      }}
    >
      <CenteredColumn>
        <SmplImage />
        <div className="blocktext">
          <MintingWindow />
          <br />
          <div className="mint">
            7667 / 7667 SMPLs <br />
            0.07 ETH <br />
            Friday June 24, 12PM PT
            <br />
          </div>
        </div>
        <p className="blocktext">
          NOTE ON DATA COLLECTION:
          <br />
          WE CALCULATE A 128-DIMENSIONAL VECTOR FROM YOUR IMAGE AND USE THIS
          ENCODING TO COMPARE AGAINST THE SMPLVERSE. NO PERSONAL DATA IS STORED
          ON OUR SERVER.
        </p>
      </CenteredColumn>
      <CenteredColumn>
        <p className="blocktext">
          <br />
          The SMPLverse is an NFT collection of synthetic facial training data
          from the computational infrastructure of the metaverse.
          <br />
          <br />
          These PFPs were procedurally-generated using SMPL—a body mesh used to
          animate avatars in mixed reality from sparse inputs—as the basis for
          new algorithms that will improve face and gesture tracking in virtual
          environments.
          <br />
          <br />
          // As a minter, you submit a face image with your webcam or via
          upload, which a face recognition model uses to find the closest
          matching image in the SMPLverse collection.
          <br />
          <br />
          // After approving the mint transaction, both images are hashed and
          written to the [token ?].
          <br />
          <br />
          When the image is submitted, it receives one attribute from the
          model: confidence.
          <br />
          <br />
          Confidence is a declining measure: as more images are minted, your
          likelihood of receiving a high confidence match decreases.
          <br />
          <br />
          Conversely, your likelihood of receiving an image with rarer visual
          attributes increases.
          <br />
          <br />
          ...
        </p>
        <p className="blocktext">
          <div className="links">ETHERSCAN</div>
          {/* Should have buttons for Etherscan, Zora, OpenSea, Discord, Twitter
    See the link-buttons images for examples. Perhaps Etherscan, Zora, and OpenSea
    are on one line and Discord + Twitter go below */}
        </p>
      </CenteredColumn>
    </Box>
  </div>
)
