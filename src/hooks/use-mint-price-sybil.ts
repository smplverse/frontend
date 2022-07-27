import { formatEther } from '@ethersproject/units'
import { useEffect, useState } from 'react'

import { useContractSybil } from './use-contract-sybil'

export const useMintPriceSybil = () => {
  const contract = useContractSybil()
  const [mintPrice, setMintPrice] = useState<number>()
  useEffect(() => {
    ;(async function () {
      if (contract) {
        const price = await contract.getMintPrice()
        setMintPrice(Number(formatEther(price)))
      }
    })()
  }, [contract])

  return mintPrice
}
