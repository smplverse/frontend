import styled from '@emotion/styled'

import smpl from '../assets/smpl.png'

export const HeaderPart = () => (
  <header className="top-nav">
    {/*
      use this header to navigate to gallery 
      view once minting has begun 
    */}
    SMPLverse
  </header>
)

const SmplImage = styled.div`
  background: url(${smpl});
  background-size: contain;
  width: 100%;
  height: auto;
`

export const MainPart = () => (
  <>
    <p className="blocktext">
      <SmplImage />
      <br />
      <div className="wrapper">
        <button>mint via webcam</button>
        <button>mint via upload</button>
      </div>
      <br />
      <div className="mint">
        7667 / 7667 SMPLs <br />
        0.07 ETH <br />
        Friday June 24, 12PM PT
        <br />
      </div>
    </p>

    <p className="blocktext">
      <br />
      The SMPLverse is an NFT collection of synthetic facial training data from
      the computational infrastructure of the metaverse.
      <br />
      <br />
      These PFPs were procedurally-generated using SMPL—a body mesh used to
      animate avatars in mixed reality from sparse inputs—as the basis for new
      algorithms that will improve face and gesture tracking in virtual
      environments.
      <br />
      <br />
      // As a minter, you submit a face image with your webcam or via upload,
      which a face recognition model uses to find the closest matching image in
      the SMPLverse collection.
      <br />
      <br />
      // After approving the mint transaction, both images are hashed and
      written to the [token ?].
      <br />
      <br />
      When the image is submitted, it receives one attribute from the model:
      confidence.
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

    <p className="blocktext">
      NOTE ON DATA COLLECTION:
      <br />
      We calculate a 128-dimensional vector from your image and use this
      encoding to compare against the SMPLverse. No personal data is stored on
      our server.
    </p>
  </>
)
