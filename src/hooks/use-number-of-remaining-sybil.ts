import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { useContractSybil } from './use-contract-sybil'

export const useNumberOfRemainingSybil = () => {
  const contract = useContractSybil() // TODO move contract to context?
  const [numberOfRemaining, setNumberOfRemaining] = useState<number>()
  const { isWaiting } = useContext(WaitingContext)

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const totalSupply = await contract.totalSupply()
        const collectionSize = await contract.getCollectionSize()
        setNumberOfRemaining(collectionSize.sub(totalSupply).toNumber())
      }
    })()
  }, [contract, isWaiting])

  return numberOfRemaining
}
