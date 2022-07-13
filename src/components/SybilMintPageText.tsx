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
      <Text>Identity is a funny thing.</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>
        Sybilverse NFTs are randomly matched from data synthesized by Microsoft
        to train face tracking algorithms for its mixed reality headsets.
      </Text>
    </Container>
  )
}
