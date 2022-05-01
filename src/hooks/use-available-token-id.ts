import { BigNumber } from 'ethers'
import { useContext, useEffect, useState } from 'react'

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
      if (contract && contract.signer) {
        const address = await contract.signer.getAddress()
        const tokenIds = await contract.getAvailableTokens(address)
        setAvailableTokenId(tokenIds[0])
      }
    })()
  }, [contract, isWaiting])

  return availableTokenId
}
