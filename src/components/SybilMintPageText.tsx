import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Text } from 'theme-ui'

interface ContainerProps {
  width: string
}

const Container = styled.div<ContainerProps>`
  font-family: 'Chalkduster', fantasy;
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
        An artist sought treatment from an analyst who specialized in multiple
        personalities and began to develop signs of dissociative identity
        disorder.
      </Text>
      <Text>
        Four years and 10 personalities later, the patient pseudonymously
        referred to as Sybil wrote to her analyst, "I do not really have any
        multiple personalities. I do not even have a 'double.' I am all of
        them."
      </Text>
      <Text>
        In Sybil's telling, her multiple personalities were borne of an
        overidentification with her analyst's professional interests. But the
        analyst refused to accept Sybil's confession and Sybil recanted,
        ultimately developing six additional personalities.
      </Text>
      <Text>
        The pseudonymous patient the analyst constructed and profited from had
        been formatively integrated into the analyst's own identity: did the
        analyst's obsession with the image of Sybil overtake Sybil's obsession
        with the image of her analyst?
      </Text>
      <Text>
        Our identities occur in a matrix of obsessions and counter-obsessions,
        expressed in the tongue of our social context.
      </Text>
      <Text>
        I am not the sum of my biometric identifiers, but the sum of the signs
        that become my signature. I am ƎꙄЯƎV⅃IᙠYꙄ, and so are you.
      </Text>
      <Text>
        <i>Signo, ergo sum.</i>
      </Text>
    </Container>
  )
}
