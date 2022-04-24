import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'

import { type SMPLverse } from '../contract'
import { useIsActive, useProvider } from './metamask'
import { useContract } from './use-contract'

export const useEthBalance = () => {
  const provider = useProvider()
  const isActive = useIsActive()
  const contract = useContract() as SMPLverse
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
