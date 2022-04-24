/** @jsxImportSource theme-ui */
import { Flex, Spinner } from 'theme-ui'

import { CHAIN_ID } from '../constants'
import {
  useAccounts,
  useChainId,
  useError,
  useIsActivating,
  useIsActive,
  useMetamask,
} from '../hooks'
import { ConnectButton } from './ConnectButton'

export const Wallet = () => {
  const error = useError()
  const isActive = useIsActive()
  const isActivating = useIsActivating()
  const accounts = useAccounts()
  const chainId = useChainId()
  const metaMask = useMetamask()

  const sliceUp = (address: string) => {
    return address.slice(0, 4) + '...' + address.slice(address.length - 4)
  }

  const connect = async () => {
    await metaMask.activate()
  }

  const changeChain = async () => {
    await metaMask?.provider?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${CHAIN_ID}` }],
    })
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
  } else if (chainId !== CHAIN_ID) {
    return <ConnectButton onClick={changeChain} text="SWITCH NETWORK" />
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
