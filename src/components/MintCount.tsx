import styled from '@emotion/styled'
import { formatEther } from '@ethersproject/units'
import { useEffect, useState } from 'react'
import { Text } from 'theme-ui'
import { useContract } from '../hooks'

const MintCountContainer = styled.div`
  font-size: 16px;
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const MintCount = () => {
  const contract = useContract()

  const [showPrice, setShowPrice] = useState(false)
  const [price, setPrice] = useState<number>()
  const [left, setLeft] = useState<number>()
  useEffect(() => {
    ;(async function () {
      // this executes on every hover, TODO move to a query hook
      if (contract) {
        const totalSupply = await contract.totalSupply()
        const collectionSize = await contract.collectionSize()
        const price = await contract.mintPrice()
        setPrice(Number(formatEther(price)))
        setLeft(totalSupply.sub(collectionSize).toNumber())
      }
    })()
  }, [contract])
  return (
    <div className="blocktext">
      <MintCountContainer
        onMouseEnter={() => setShowPrice(true)}
        onMouseLeave={() => setShowPrice(false)}
      >
        {showPrice ? <Text>Ξ{price}</Text> : <Text>{left} / 7667</Text>}
      </MintCountContainer>
    </div>
  )
}
