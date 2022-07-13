/** jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { MouseEventHandler, ReactNode } from 'react'
import { Text } from 'theme-ui'

interface Props {
  text?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
}

const LargeButtonContainer = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
`

const SmallButtonContainer = styled(LargeButtonContainer)``

export const ConnectButton = ({ onClick, text, children }: Props) => {
  const index = useBreakpointIndex()

  return index > 2 ? (
    <LargeButtonContainer onClick={onClick}>
      {text ? (
        <Text color="text">{text.toUpperCase()}</Text>
      ) : (
        children && children
      )}
    </LargeButtonContainer>
  ) : (
    <SmallButtonContainer onClick={onClick}>
      {text ? <Text color="text">{text}</Text> : children && children}
    </SmallButtonContainer>
  )
}
