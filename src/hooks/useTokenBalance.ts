import { useState, useEffect } from 'react'
import { useContract } from './useContract'
import { SMPLverse } from '../contract'

export const useTokenBalance = () => {
  const [balance, setBalance] = useState<number>(0)
  const contract = useContract() as SMPLverse

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer) {
        try {
          const signerAddress = await contract.signer.getAddress()
          const _balance = await contract.balanceOf(signerAddress)
          setBalance(Number(_balance))
        } catch (e) {
          // pass
        }
      }
    })()
  }, [contract])

  return balance
}
