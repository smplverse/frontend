import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Text } from 'theme-ui'

interface ContainerProps {
  width: string
}

const Container = styled.div<ContainerProps>`
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
  text-justify: center;
  text-align: justify;
  margin-top: 10px;
  & > span {
    margin-top: 25px;
  }
  margin-bottom: 60px;
  width: ${(props) => props.width};
`

export const SybilMintPageText = () => {
  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? '512px' : '90%'
  return (
    <Container width={x}>
      <Text>
        SMPLverse NFTs use facial recognition to retrieve data synthesized by
        Microsoft to train face tracking algorithms for its mixed reality
        headsets.
      </Text>
      <Text>
        After minting, you will receive a token with which you can submit an
        image through the webcam interface above. Your submitted image will be
        written to the token as a hash.
      </Text>
      <Text>
        Our facial recognition model uses this hash to match your image to a
        smpl. When the image is matched, it receives one attribute: confidence.
      </Text>
      <Text>
        Confidence assesses the likelihood that your image matches the smpl you
        receive.
      </Text>
      <Text>
        Confidence is a declining measure: as more smpls are matched, your
        likelihood of receiving a high confidence match decreases.
      </Text>
      <Text>
        Conversely, your likelihood of receiving a smpl with rarer visual
        attributes increases.
      </Text>
      <Text>
        7 smpls are each entitled to 4.14% of secondary revenue. These rare
        smpls are clustered by head pose.
      </Text>
    </Container>
  )
}
