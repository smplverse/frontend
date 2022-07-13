import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'

import { ETHERSCAN_LINK } from '../constants'
import { CenteredColumn } from './Flex'

interface LinkProps {
  width?: number
}

const Link = styled.div<LinkProps>`
  border-radius: 1rem;
  background-color: #ffffff;
  font-family: 'Chalkduster', fantasy;
  font-size: 16px;
  line-height: 1.25em;
  color: hotpink;
  padding: 0.75rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width}px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 6px;
  text-transform: uppercase;
  border: 1px solid hotpink;
  &:hover {
    color: #000000;
    border-color: #000000;
  }
`

const LinkRight = styled(Link)`
  margin-left: 6px;
  margin-right: 0px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const SybilFooter = () => {
  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? 250 : 150
  return (
    <CenteredColumn>
      <Row>
        <a
          href="https://www.youtube.com/watch?v=d-kcczAff40"
          style={{ textDecoration: 'none' }}
        >
          <Link width={x}>info</Link>
        </a>
        <a
          href="https://www.youtube.com/watch?v=txHNcE_d7ro"
          style={{ textDecoration: 'none' }}
        >
          <LinkRight width={x}>attribution</LinkRight>
        </a>
      </Row>
      <Row>
        <a
          href="https://discord.gg/2hWDykfUdq"
          style={{ textDecoration: 'none' }}
        >
          <Link width={x}>discord</Link>
        </a>
        <a
          href="https://twitter.com/smplverse"
          style={{ textDecoration: 'none' }}
        >
          <LinkRight width={x}>twitter</LinkRight>
        </a>
      </Row>
      <Row>
        <a
          href="https://opensea.io/collection/smplverse"
          style={{ textDecoration: 'none' }}
        >
          <Link width={x}>opensea</Link>
        </a>
        <a href={ETHERSCAN_LINK} style={{ textDecoration: 'none' }}>
          <LinkRight width={x}>etherscan</LinkRight>
        </a>
      </Row>
    </CenteredColumn>
  )
}
