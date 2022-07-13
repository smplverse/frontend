/** jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'
import { useColorMode } from 'theme-ui'

interface Props {
  text?: string
  onClick: MouseEventHandler<HTMLDivElement>
}

const SmplverseButtonContainer = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
`

export const SmplverseButton = ({ onClick, text }: Props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <SmplverseButtonContainer
      onClick={onClick}
      color={colorMode === 'light' ? 'white' : 'black'}
    >
      {text}
    </SmplverseButtonContainer>
  )
}
