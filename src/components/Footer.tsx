import styled from '@emotion/styled'

import { ETHERSCAN_LINK } from '../constants'
import { CenteredColumn } from './Flex'

const Link = styled.div`
  border-radius: 1rem;
  background-color: #008f11;
  font-family: monospace;
  font-size: 16px;
  line-height: 1.25em;
  color: #000000;
  margin-bottom: 1.5rem;
  padding: 0.75rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 512px;
  margin-top: 5px;
  text-transform: uppercase;
  border: 1px solid #008f11;
  &:hover {
    background-color: #000000;
    color: #008f11;
  }
`

export const Footer = () => (
  <CenteredColumn>
    <a href={ETHERSCAN_LINK} style={{ textDecoration: 'none' }}>
      <Link>etherscan</Link>
    </a>
    <a
      href="https://testnets.opensea.io/collection/smplverse"
      style={{ textDecoration: 'none' }}
    >
      <Link>opensea</Link>
    </a>
    <a
      href="https://testnets.opensea.io/collection/smplverse"
      style={{ textDecoration: 'none' }}
    >
      <Link>zora</Link>
    </a>
  </CenteredColumn>
)
