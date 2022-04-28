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
  margin-top: 28px;
  & > span {
    margin-top: 25px;
  }
  margin-bottom: 50px;
`

export const MintPageText = () => (
  <Container>
    <Text>
      SMPLverse is an NFT collection of synthetic face data from the computational 
      infrastructure of the metaverse, assigned to minters using facial recognition.
    </Text>
    <Text>
      After minting, you receive a token that allows you to submit an image through 
      the webcam interface above. Your submitted image is stored on-chain as a hash.
    </Text>
    <Text>
      Our facial recognition model then matches your image to a smpl. When the image 
      is matched, it receives one attribute: confidence.
    </Text>
    <Text>
      Confidence assesses the likelihood that your image matches the smpl you receive.
    </Text>
    <Text>
      Confidence is a declining measure: as more smpls are minted, your likelihood of 
      receiving a high confidence match decreases.
    </Text>
    <Text>
      Conversely, your likelihood of receiving a smpl with rarer visual attributes increases.
    </Text>
    <Text>
      11 smpls, clustered by head pose, will split 55% of secondary revenue, paid out 
      in ETH to owners.
    </Text>
    <Text>
      ***
    </Text>
    <Text>
      SMPLverse comprises 7,667 training images built with SMPL—a body mesh 
      used to animate avatars in virtual environments—to improve face tracking in 
      Microsoft's mixed reality headsets.
    </Text>
    <Text>
      Like many PFP projects, the images are procedurally generated, combining 
      a parametric face model with a library of artist-authored assets. The 
      outputs bear a striking resemblance to the avatars whose naturalism they are meant to enhance.
    </Text>
    <Text>
      By foregrounding the dependence on hardware and software developed by major tech 
      platforms, SMPLverse gives form to the "centralization-in-the-loop” character of 
      the metaverse: each NFT is a tool to access the infrastructure that underlies 
      your virtual identity.
    </Text>
    <Text>
      ***
    </Text>
    <Text>
      After the mint, we'll be launching 3D assets and mixed reality experiences to bring 
      your smpls into the physical world. We'll also be collaborating with other collections 
      and protocols to build new types of shared virtual experiences.
    </Text>
  </Container>
)
