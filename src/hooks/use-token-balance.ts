import { useEffect, useState } from 'react'

import { NULL_HASH } from '../constants'
import { SMPLverse } from '../contract'
import { useContract } from './use-contract'

export const useTokenBalance = () => {
  const [balance, setBalance] = useState<number | undefined>(undefined)
  const contract = useContract() as SMPLverse
  const [signerAddress, setSignerAddress] = useState<string>()

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const _signerAddress = await contract.signer.getAddress()
        setSignerAddress(_signerAddress)
      }
    })()
  }, [contract])

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer) {
        try {
          let _balance = 0
          const signerAddress = await contract.signer.getAddress()
          const tokenIds = await contract.tokensOfOwner(signerAddress)
          for (const tokenId of tokenIds) {
            const uploadHash = await contract.uploads(tokenId)
            console.log(uploadHash, NULL_HASH)
            if (uploadHash === NULL_HASH) {
              console.log('sasdf')
              _balance += 1
            }
          }
          setBalance(Number(_balance))
        } catch (e) {
          // pass
        }
      }
    })()
  }, [contract, signerAddress])

  return balance
}
