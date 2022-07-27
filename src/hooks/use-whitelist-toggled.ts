import { useContext, useEffect, useState } from 'react'

import { WaitingContext } from '../contexts'
import { SMPLverse } from '../contract'
import { useIsActive } from './metamask'
import { useContract } from './use-contract'

export const useWhitelistToggled = () => {
  const [whitelistToggled, setWhitelistToggled] = useState<boolean>()
  const contract = useContract() as SMPLverse
  const { isWaiting } = useContext(WaitingContext)
  const isActive = useIsActive()

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer && !isWaiting) {
        const _whitelistToggled = await contract.whitelistMintOpen()
        setWhitelistToggled(_whitelistToggled)
      }
    })()
  }, [contract, isWaiting, isActive])

  return whitelistToggled
}
