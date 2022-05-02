import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'

interface Props {
  text?: string
  onClick: MouseEventHandler<HTMLDivElement>
}

const SmplverseButtonContainer = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  width: 150px;
`

export const SmplverseButton = ({ onClick, text }: Props) => {
  return (
    <SmplverseButtonContainer onClick={onClick}>
      {text}
    </SmplverseButtonContainer>
  )
}