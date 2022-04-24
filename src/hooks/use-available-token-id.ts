import { BigNumber } from 'ethers'
import { useContext, useEffect, useState } from 'react'

import { NULL_HASH } from '../constants'
import { WaitingContext } from '../contexts'
import { SMPLverse } from '../contract'
import { useContract } from './use-contract'

export const useAvailableTokenId = () => {
  const contract = useContract() as SMPLverse
  const { isWaiting } = useContext(WaitingContext)
  const [availableTokenId, setAvailableTokenId] = useState<
    BigNumber | undefined
  >()

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const tokenIds = await contract.tokensOfOwner(
          await contract.signer.getAddress()
        )
        for (const tokenId of tokenIds) {
          if (tokenId) {
            const uploadHash = await contract.uploads(tokenId)
            if (uploadHash == NULL_HASH) {
              setAvailableTokenId(tokenId)
              break
            }
          }
        }
      }
    })()
  }, [contract, isWaiting])

  return availableTokenId
}
