/** @jsxImportSource theme-ui */
import { Flex, Spinner } from 'theme-ui'

import {
  metaMask,
  useAccounts,
  useError,
  useIsActivating,
  useIsActive,
} from '../connectors/metamask'
import ConnectButton from './ConnectButton'

const Wallet = () => {
  const error = useError()
  const isActive = useIsActive()
  const isActivating = useIsActivating()
  const accounts = useAccounts()

  const sliceUp = (address: string) => {
    return address.slice(0, 4) + '...' + address.slice(address.length - 4)
  }

  const connect = async () => {
    await metaMask.activate()
  }

  if (!isActive && !isActivating) {
    return <ConnectButton onClick={connect} text="CONNECT" />
  } else if (isActivating) {
    return (
      <ConnectButton>
        <Flex sx={{ justifyContent: 'center' }}>
          <Spinner
            color="green"
            size="22"
            strokeWidth={3}
            sx={{ margin: 'none' }}
          />
        </Flex>
      </ConnectButton>
    )
  } else if (isActive) {
    return (
      <ConnectButton onClick={() => metaMask.deactivate()}>
        {accounts?.length ? sliceUp(accounts[0]) : 'Disconnect'}
      </ConnectButton>
    )
  } else if (error) {
    alert(error)
    return <ConnectButton text="error" />
  }

  return <ConnectButton />
}

export default Wallet
