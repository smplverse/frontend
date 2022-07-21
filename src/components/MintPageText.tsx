import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Text } from 'theme-ui'

interface ContainerProps {
  width: string
}

const Container = styled.div<ContainerProps>`
  font-family: 'IBM Plex Mono', monospace;
  color: #ffffff;
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

export const MintPageText = () => {
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
        SMPL. When the image is matched, it receives one attribute: confidence.
      </Text>
      <Text>
        Confidence assesses the likelihood that your image matches the SMPL you
        receive.
      </Text>
      <Text>
        Confidence is a declining measure: as more SMPLs are matched, your
        likelihood of receiving a high confidence match decreases.
      </Text>
      <Text>
        The minting process elaborates the tension between individual agency
        and computational constraint: even a pool of 100,000 images is too
        small to consistently deliver high confidence matches.
      </Text>
    </Container>
  )
}
