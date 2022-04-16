import { Contract } from '@ethersproject/contracts'
import { useProvider } from 'connectors/metamask'
import { SMPLverseArtifact, SMPLverse } from '../contract'

import { CONTRACT_ADDRESS } from '../constants'

export const useContract = () => {
  const provider = useProvider()

  if (provider) {
    return new Contract(
      CONTRACT_ADDRESS,
      SMPLverseArtifact.abi,
      provider?.getSigner() || provider || undefined
    ) as SMPLverse
  }
  return undefined
}
