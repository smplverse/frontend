import styled from '@emotion/styled'

import { ETHERSCAN_LINK } from '../constants'
import { CenteredColumn } from './Flex'

const Link = styled.div`
  border: 1px solid #008f11;
  border-radius: 1rem;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.25em;
  color: #008f11;
  margin-bottom: 1.5rem;
  padding: 0.75rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 512px;
  margin-top: 10px;
  text-transform: uppercase;
  &:hover {
    filter: invert(1);
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
