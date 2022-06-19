import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

import { CONTRACT_ADDRESS, PROJECT_ID } from '../constants'
import { SMPLverse, SMPLverseArtifact } from '../contract'
import { useProvider } from '../hooks'

export const useContract = () => {
  const [contract, setContract] = useState<SMPLverse>()
  const provider = useProvider()
  const url = `https://rinkeby.infura.io/v3/${PROJECT_ID}`

  useEffect(() => {
    ;(async function () {
      const _contract = new Contract(
        CONTRACT_ADDRESS,
        SMPLverseArtifact.abi,
        provider?.getSigner() || ethers.getDefaultProvider(url)
      ) as SMPLverse
      setContract(_contract)
    })()
  }, [provider])

  return contract
}
