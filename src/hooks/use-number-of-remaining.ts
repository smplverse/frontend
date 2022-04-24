import { useEffect, useState } from 'react'

import { useContract } from './use-contract'

export const useNumberOfRemaining = () => {
  const contract = useContract() // TODO move contract to context?
  const [numberOfRemaining, setNumberOfRemaining] = useState<number>()

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const totalSupply = await contract.totalSupply()
        const collectionSize = await contract.collectionSize()
        setNumberOfRemaining(collectionSize.sub(totalSupply).toNumber())
      }
    })()
  }, [contract])

  return numberOfRemaining
}
