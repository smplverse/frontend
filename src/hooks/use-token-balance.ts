import { WaitingContext } from '../contexts'
import { useContext, useEffect, useState } from 'react'

import { NULL_HASH } from '../constants'
import { SMPLverse } from '../contract'
import { useContract } from './use-contract'

export const useTokenBalance = () => {
  const [balance, setBalance] = useState<number | undefined>(undefined)
  const contract = useContract() as SMPLverse
  const [signerAddress, setSignerAddress] = useState<string>()
  const { isWaiting } = useContext(WaitingContext)

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const _signerAddress = await contract.signer.getAddress()
        setSignerAddress(_signerAddress)
      }
    })()
  }, [contract, isWaiting])

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
              _balance += 1
            }
          }
          setBalance(Number(_balance))
        } catch (e) {
          // pass
        }
      }
    })()
  }, [contract, signerAddress, isWaiting])

  return balance
}
