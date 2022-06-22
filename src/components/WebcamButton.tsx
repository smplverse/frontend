import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { ButtonContainer } from './ButtonContainer'

interface Props {
  children: ReactNode
  onClick: () => void
}

interface ButtonProps {
  width: number
}

const WebcamButtonContainer = styled(ButtonContainer)<ButtonProps>`
  width: ${(props) => props.width}px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
`

const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
`

export const WebcamButton = ({ children, onClick }: Props) => (
  <WebcamButtonContainer onClick={onClick} width={150}>
    <InvertOnHover>{children}</InvertOnHover>
  </WebcamButtonContainer>
)
