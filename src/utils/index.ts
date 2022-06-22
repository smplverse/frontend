import { Web3Provider } from '@ethersproject/providers'

export function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(
    provider,
    typeof provider.chainId === 'number'
      ? provider.chainId
      : typeof provider.chainId === 'string'
      ? parseInt(provider.chainId)
      : 'any'
  )
  library.pollingInterval = 15_000
  return library
}

export const sliceUp = (address: string) => {
  return address.slice(0, 4) + '...' + address.slice(address.length - 4)
}
