import { formatEther } from '@ethersproject/units'
import { useEffect, useState } from 'react'

import { useContract } from './use-contract'

export const useMintPrice = () => {
  const contract = useContract()
  const [mintPrice, setMintPrice] = useState<number>()
  useEffect(() => {
    ;(async function () {
      // this executes on every hover, TODO move to a query hook
      if (contract) {
        const price = await contract.mintPrice()
        setMintPrice(Number(formatEther(price)))
      }
    })()
  }, [contract])

  return mintPrice
}
