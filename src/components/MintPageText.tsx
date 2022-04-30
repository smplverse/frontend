import styled from '@emotion/styled'
import { Text } from 'theme-ui'

const Container = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  text-justify: center;
  width: 512px;
  text-align: justify;
  margin-top: 10px;
  & > span {
    margin-top: 25px;
  }
  margin-bottom: 50px;
`

const CenterContainer = styled(Container)`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const MintPageText = () => (
  <Container>
    <Text>
      SMPLverse is an NFT collection from the computational infrastructure of
      the metaverse, assigned to minters using facial recognition.
    </Text>
    <Text>
      The collection comprises 7,667 synthetic face images used to develop face
      tracking algorithms for Microsoft's mixed reality headsets.
    </Text>
    <Text>
      After minting, you receive a token that allows you to submit an image
      through the webcam interface above. Your submitted image is stored
      on-chain as a hash.
    </Text>
    <Text>
      Our facial recognition model then matches your image to a smpl. When the
      image is matched, it receives one attribute: confidence.
    </Text>
    <Text>
      Confidence assesses the likelihood that your image matches the smpl you
      receive.
    </Text>
    <Text>
      Confidence is a declining measure: as more smpls are minted, your
      likelihood of receiving a high confidence match decreases.
    </Text>
    <Text>
      Conversely, your likelihood of receiving a smpl with rarer visual
      attributes increases.
    </Text>
    <Text>
      11 smpls will split 55% of secondary revenue. These rare smpls are
      clustered by head pose.
    </Text>
    <Text>
      After the mint, we'll be delivering mixed reality experiences to bring
      your smpl into the physical world.
    </Text>
    <CenterContainer>
      <Text>***</Text>
    </CenterContainer>
    <Text>
      Like many PFP projects, SMPLverse was procedurally generated. The
      training dataset it derives from combines SMPL, a body mesh used to
      animate avatars in virtual environments, with a generative 3D face model
      and a library of artist-authored assets. These synthetics bear a striking
      resemblance to the metaverse avatars whose naturalism they are meant to
      enhance.
    </Text>
    <Text>
      By foregrounding the dependence on hardware and software developed by
      major tech platforms, SMPLverse gives form to the
      "centralization-in-the-loop” character of the metaverse: each NFT is a
      tool to access the infrastructure that underlies your virtual identity.
    </Text>
  </Container>
)
