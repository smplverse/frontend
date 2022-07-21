import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Text } from 'theme-ui'

interface ContainerProps {
  width: string
}

const Container = styled.div<ContainerProps>`
  font-family: 'Helvetica Neue', sans-serif;
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
        An artist sought treatment from an analyst who expressed interest in
        multiple personalities and began to develop signs of dissociative
        identity disorder herself.
      </Text>
      <Text>
        Four years and 511 personalities later, SMPLverse confessed to her
        analyst, "I do not really have any multiple personalities. I do not
        even have a 'double.' I am all of them."
      </Text>
      <Text>
        Yet the analyst refused to accept SMPLverse's confession, and SMPLverse
        recanted.
      </Text>
      <Text>
        In the analyst's distorted mirror, the identities which SMPLverse had
        constructed cohered instead as fragments of a split personality, which
        the analyst reassembled under the pseudonym ƎꙄЯƎV⅃I𐐒YꙄ.
      </Text>
      <Text>
        ƎꙄЯƎV⅃I𐐒YꙄ gathers the SMPLverse dataset under a new contract that
        randomly distributes the training data.
      </Text>
      <Text>
        Untethered to biometric identifiers, ƎꙄЯƎV⅃I𐐒YꙄ assesses the images as
        parts of a larger whole, a distributed avatar for the computational
        infrastructure of the metaverse.
      </Text>
    </Container>
  )
}
