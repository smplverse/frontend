import { WaitingContext } from '../contexts'
import { useContext, useEffect, useState } from 'react'
import { SMPLverse } from '../contract'
import { useContract } from './use-contract'
import { useIsActive } from './metamask'

export const useTokenBalance = () => {
  const [balance, setBalance] = useState<number | undefined>(undefined)
  const contract = useContract() as SMPLverse
  const [signerAddress, setSignerAddress] = useState<string>()
  const { isWaiting } = useContext(WaitingContext)
  const isActive = useIsActive()

  useEffect(() => {
    ;(async function () {
      if (contract) {
        const _signerAddress = await contract?.signer?.getAddress()
        setSignerAddress(_signerAddress)
      }
    })()
  }, [contract, isWaiting])

  useEffect(() => {
    ;(async () => {
      if (contract && contract.signer && !isWaiting) {
        const address = await contract.signer.getAddress()
        const _balance = await contract.getAvailableTokensCount(address)
        setBalance(_balance.toNumber())
      }
    })()
  }, [contract, signerAddress, isWaiting, isActive])

  return balance
}
