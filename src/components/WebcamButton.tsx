import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { ButtonContainer } from './ButtonContainer'

interface Props {
  children: ReactNode
  onClick: () => void
}

const WebcamButtonContainer = styled(ButtonContainer)`
  width: 230px;
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
  <WebcamButtonContainer onClick={onClick}>
    <InvertOnHover>{children}</InvertOnHover>
  </WebcamButtonContainer>
)
