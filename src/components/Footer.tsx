import styled from '@emotion/styled'

import { ETHERSCAN_LINK } from '../constants'
import { CenteredColumn } from './Flex'

const Link = styled.div`
  border-radius: 1rem;
  background-color: #000000;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  line-height: 1.25em;
  color: #008f11;
  padding: 0.75rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 7px;
  margin-bottom: 7px;
  margin-right: 6px;
  text-transform: uppercase;
  border: 1px solid #008f11;
  &:hover {
    color: #ffffff;
    border-color: #ffffff;
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

export const Footer = () => (
  <CenteredColumn>
    <Row>
      <a
        href="https://arxiv.org/pdf/2109.15102.pdf"
        style={{ textDecoration: 'none' }}
      >
        <Link>info</Link>
      </a>
      <LinkRight>etherscan</LinkRight>
    </Row>
    <Row>
      <Link>opensea</Link>
      <LinkRight>zora</LinkRight>
    </Row>
    <Row>
      <a
        href="https://discord.gg/2hWDykfUdq"
        style={{ textDecoration: 'none' }}
      >
        <Link>discord</Link>
      </a>
      <a
        href="https://twitter.com/smplverse"
        style={{ textDecoration: 'none' }}
      >
        <LinkRight>twitter</LinkRight>
      </a>
    </Row>
  </CenteredColumn>
)
