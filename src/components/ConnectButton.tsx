import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { MouseEventHandler, ReactNode } from 'react'
import { Text } from 'theme-ui'

import { useAccounts, useIsActive } from '../connectors/metamask'
import { Identicon } from './Identicon'

interface Props {
  text?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
}

const LargeButtonContainer = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

const SmallButtonContainer = styled(LargeButtonContainer)``

export const ConnectButton = ({ onClick, text, children }: Props) => {
  const isActive = useIsActive()
  const accounts = useAccounts()
  const displayIdenticon = isActive && accounts?.length
  const index = useBreakpointIndex()

  return index > 2 ? (
    <LargeButtonContainer onClick={onClick}>
      {text ? <Text>{text.toUpperCase()}</Text> : children && children}
      {displayIdenticon && <Identicon account={accounts[0]} size={28} />}
    </LargeButtonContainer>
  ) : (
    <SmallButtonContainer onClick={onClick}>
      {text ? <Text>{text}</Text> : children && children}
      {displayIdenticon && <Identicon account={accounts[0]} size={14} />}
    </SmallButtonContainer>
  )
}
