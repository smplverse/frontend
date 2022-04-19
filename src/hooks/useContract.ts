import { Contract } from '@ethersproject/contracts'
import { useProvider } from 'connectors/metamask'
import { SMPLverseArtifact, SMPLverse } from '../contract'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

import { CONTRACT_ADDRESS } from '../constants'

export const useContract = () => {
  const [contract, setContract] = useState<Contract | null>(null)
  const provider = useProvider()

  useEffect(() => {
    ;(async function () {
      console.log(provider)
      const _contract = new Contract(
        CONTRACT_ADDRESS,
        SMPLverseArtifact.abi,
        provider?.getSigner() || ethers.getDefaultProvider('rinkeby')
      ) as SMPLverse
      setContract(_contract)
    })()
  }, [provider])

  return contract
}
