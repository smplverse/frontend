import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { useContractSybil } from './use-contract-sybil'

export const useNumberFreeMintSybil = () => {
  const contract = useContractSybil() // TODO move contract to context?
  const [numberFreeMint, setNumberFreeMint] = useState<number>()
  const { isWaiting } = useContext(WaitingContext)

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const freeMintUsed = await contract.numFreeMint()
        const freeMintTotal = await contract.getReservedFreeMint()
        setNumberFreeMint(freeMintTotal.sub(freeMintUsed).toNumber())
      }
    })()
  }, [contract, isWaiting])

  return numberFreeMint
}
