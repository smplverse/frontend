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
        Four years and 10 personalities later, the patient confessed to her
        analyst, "I do not really have any multiple personalities. I do not
        even have a 'double.' I am all of them."
      </Text>
      <Text>
        But the analyst refused to accept the patient's confession and the
        patient recanted, ultimately developing an additional six personalities
        over the course of her treatment.
      </Text>
      <Text>
        The identities which the patient had constructed now acted back on her
        through the contorted mirror of her analyst, who reassembled the
        patient's image under the pseudonym Sybil.
      </Text>
      <Text>
        ƎꙄЯƎV⅃IᙠYꙄ forks the SMPLverse dataset to a new contract that randomly
        distributes the training data, reassembling Microsoft's images—with
        their "unprecedented realism and diversity"—under a new sign.
      </Text>
      <Text>
        You do not really have any multiple personalities. You do not even have
        a 'double.' You are all of them.
      </Text>
    </Container>
  )
}
