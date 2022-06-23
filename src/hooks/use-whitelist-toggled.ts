import { WaitingContext } from '../contexts'
import { useContext, useEffect, useState } from 'react'
import { SMPLverse } from '../contract'
import { useContract } from './use-contract'
import { useIsActive } from './metamask'

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
