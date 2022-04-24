import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { useContract } from './use-contract'

export const useNumberOfRemaining = () => {
  const contract = useContract() // TODO move contract to context?
  const [numberOfRemaining, setNumberOfRemaining] = useState<number>()
  const { isWaiting } = useContext(WaitingContext)

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const totalSupply = await contract.totalSupply()
        const collectionSize = await contract.collectionSize()
        setNumberOfRemaining(collectionSize.sub(totalSupply).toNumber())
      }
    })()
  }, [contract, isWaiting])

  return numberOfRemaining
}
