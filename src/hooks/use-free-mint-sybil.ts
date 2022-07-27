import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { Sybilverse } from '../contract-sybil'
import { useIsActive } from './metamask'
import { useContractSybil } from './use-contract-sybil'

export const useFreeMintSybil = () => {
  const [freeMintActive, setFreeMintActive] = useState<boolean>()
  const contract = useContractSybil() as Sybilverse
  const { isWaiting } = useContext(WaitingContext)
  const isActive = useIsActive()

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer && !isWaiting) {
        const _freeMintActive = await contract.isFreeMintActive()
        setFreeMintActive(_freeMintActive)
      }
    })()
  }, [contract, isWaiting, isActive])

  return freeMintActive
}
