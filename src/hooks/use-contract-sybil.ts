import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

import { CHAIN_ID, CONTRACT_ADDRESS, PROJECT_ID } from '../constants-sybil'
import { Sybilverse, SybilverseArtifact } from '../contract-sybil'
import { useChainId, useProvider } from '.'

export const useContractSybil = () => {
  const [contract, setContract] = useState<Sybilverse>()
  const chainId = useChainId()
  const provider = useProvider()
  const url = `https://goerli.infura.io/v3/${PROJECT_ID}`

  useEffect(() => {
    ;(async function () {
      const signer = provider?.getSigner()
      const shouldUseSigner = chainId === CHAIN_ID && signer !== undefined

      const _contract = new Contract(
        CONTRACT_ADDRESS,
        SybilverseArtifact.abi,
        shouldUseSigner ? signer : ethers.getDefaultProvider(url)
      ) as Sybilverse

      setContract(_contract)
    })()
  }, [provider])

  return contract
}
