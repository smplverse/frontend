import { CenteredRow } from './Flex'
import { CONTRACT_ADDRESS_RINKEBY } from '../constants'
import styled from '@emotion/styled'

const etherscanLink =
  'https://rinkeby.etherscan.io/address/' + CONTRACT_ADDRESS_RINKEBY

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
  margin-top: 20px;
`

export const MintPageFooter = () => (
  <CenteredRow>
    <a href={etherscanLink} style={{ textDecoration: 'none' }}>
      <Link>ETHERSCAN</Link>
    </a>
  </CenteredRow>
)
