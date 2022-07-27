import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

import { type Sybilverse } from '../contract-sybil'
import { useIsActive, useProvider } from './metamask'
import { useContractSybil } from './use-contract-sybil'

export const useEthBalanceSybil = () => {
  const provider = useProvider()
  const isActive = useIsActive()
  const contract = useContractSybil() as Sybilverse
  const [ethBalance, setEthBalance] = useState<BigNumber>()
  useEffect(() => {
    const getBalance = async () => {
      if (isActive && provider && contract?.signer) {
        const signerAddress = await contract.signer.getAddress()
        setEthBalance(await provider.getBalance(signerAddress))
      }
    }
    getBalance()
  }, [isActive, contract, provider])

  return ethBalance
}
