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
  margin-top: 50px;
  & > span {
    margin-top: 15px;
  }
  margin-bottom: 20px;
`

export const MintPageText = () => (
  <Container>
    <Text>
      The smplverse is an nft collection of synthetic facial training data from
      the computational infrastructure of the metaverse.
    </Text>
    <Text>
      These pfps were procedurally-generated using smpl—a body mesh used to
      animate avatars in mixed reality from sparse inputs—as the basis for new
      algorithms that will improve face and gesture tracking in virtual
      environments.
    </Text>
    <Text>
      As a minter, you submit a face image with your webcam or via upload,
      which a face recognition model uses to find the closest matching image in
      the smplverse collection.
    </Text>
    <Text>
      After approving the mint transaction, both images are hashed and written
      to the [token ?].
    </Text>
    <Text>
      When the image is submitted, it receives one attribute from the model:
      confidence.
    </Text>
    <Text>
      Confidence is a declining measure: as more images are minted, your
      likelihood of receiving a high confidence match decreases.
    </Text>
    <Text>
      Conversely, your likelihood of receiving an image with rarer visual
      attributes increases.
    </Text>
    <Text>Note on data collection:</Text>
    <Text>
      We calculate a 128-dimensional vector from your image and use this
      encoding to compare against the smplverse. no personal data is stored on
      our server.
    </Text>
  </Container>
)
