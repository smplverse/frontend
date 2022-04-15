/** jsxImportSource theme-ui */
import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { Centered } from 'components/Flex'
import Identicon from 'components/Identicon'
import { MouseEventHandler, ReactNode } from 'react'
import { Text } from 'theme-ui'

import {
  useAccounts,
  useIsActivating,
  useIsActive,
} from '../connectors/metamask'

interface Props {
  text?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  children?: ReactNode
}

const LargeButtonContainer = styled.div`
  width: 212px;
  height: 74px;
  cursor: pointer;
  user-select: none;
  background-size: contain;
`

const SmallButtonContainer = styled(LargeButtonContainer)`
  width: calc(212px * 0.7);
  height: calc(74px * 0.7);
`

const ConnectButton = ({ onClick, text, children }: Props) => {
  const isActive = useIsActive()
  const accounts = useAccounts()
  const displayIdenticon = isActive && accounts?.length
  const index = useBreakpointIndex()
  const isActivating = useIsActivating()

  return index > 2 ? (
    <LargeButtonContainer onClick={onClick}>
      <Centered pb={2} pl={displayIdenticon ? 2 : 0} fontSize={3}>
        {text ? <Text>{text}</Text> : children && children}
        <>
          {displayIdenticon && (
            <Identicon account={accounts[0]} ml={2} mt={2} size={28} />
          )}
        </>
      </Centered>
    </LargeButtonContainer>
  ) : (
    <SmallButtonContainer onClick={onClick}>
      <Centered pb={2} pl={displayIdenticon ? 3 : 0} ml={isActivating ? 0 : 1}>
        {text ? <Text>{text}</Text> : children && children}
        {displayIdenticon && (
          <Identicon account={accounts[0]} ml={1} mt={3} size={14} />
        )}
      </Centered>
    </SmallButtonContainer>
  )
}
export default ConnectButton
