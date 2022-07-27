import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { Sybilverse } from '../contract-sybil'
import { useContractSybil } from './use-contract-sybil'

export const useFreeMintCountSybil = () => {
  const contract = useContractSybil() as Sybilverse
  const { isWaiting } = useContext(WaitingContext)
  const [freeMintCount, setFreeMintCount] = useState<number>()

  useEffect(() => {
    ;(async function () {
      if (contract && contract.signer) {
        const address = await contract.signer.getAddress()
        const signerFreeMintCount = await contract.getFreeMintCount(address)
        setFreeMintCount(signerFreeMintCount)
      }
    })()
  }, [contract, isWaiting])

  return freeMintCount
}
