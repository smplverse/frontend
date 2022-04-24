import { useEffect, useState } from 'react'

import { NULL_HASH } from '../constants'
import { SMPLverse } from '../contract'
import { useContract } from './use-contract'

export const useTokenBalance = () => {
  const [balance, setBalance] = useState<number>(0)
  const contract = useContract() as SMPLverse

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer) {
        try {
          let _balance = 0
          const signerAddress = await contract.signer.getAddress()
          const tokenIds = await contract.tokensOfOwner(signerAddress)
          for (const tokenId of tokenIds) {
            const uploadHash = await contract.uploads(tokenId)
            if (uploadHash === NULL_HASH) {
              _balance += 1
            }
          }
          setBalance(Number(_balance))
        } catch (e) {
          // pass
        }
      }
    })()
  }, [contract])

  return balance
}
