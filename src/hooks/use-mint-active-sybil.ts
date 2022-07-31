import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { Sybilverse } from '../contract-sybil'
import { useIsActive } from './metamask'
import { useContractSybil } from './use-contract-sybil'

export const useMintActiveSybil = () => {
  const [mintActive, setMintActive] = useState<boolean>()
  const contract = useContractSybil() as Sybilverse
  const { isWaiting } = useContext(WaitingContext)
  const isActive = useIsActive()

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer && !isWaiting) {
        const _mintActive = await contract.isMintActive()
        setMintActive(_mintActive)
      }
    })()
  }, [contract, isWaiting, isActive])

  return mintActive
}
