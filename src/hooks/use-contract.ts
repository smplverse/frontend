import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

import { CONTRACT_ADDRESS } from '../constants'
import { SMPLverse, SMPLverseArtifact } from '../contract'
import { useProvider } from '../hooks'

export const useContract = () => {
  const [contract, setContract] = useState<SMPLverse>()
  const provider = useProvider()

  useEffect(() => {
    ;(async function () {
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
