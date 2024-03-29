import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

import { CHAIN_ID, CONTRACT_ADDRESS, PROJECT_ID } from '../constants'
import { SMPLverse, SMPLverseArtifact } from '../contract'
import { useChainId, useProvider } from '../hooks'

export const useContract = () => {
  const [contract, setContract] = useState<SMPLverse>()
  const chainId = useChainId()
  const provider = useProvider()
  const url = `https://mainnet.infura.io/v3/${PROJECT_ID}`

  useEffect(() => {
    ;(async function () {
      const signer = provider?.getSigner()
      const shouldUseSigner = chainId === CHAIN_ID && signer !== undefined

      const _contract = new Contract(
        CONTRACT_ADDRESS,
        SMPLverseArtifact.abi,
        shouldUseSigner ? signer : ethers.getDefaultProvider(url)
      ) as SMPLverse

      setContract(_contract)
    })()
  }, [provider])

  return contract
}
