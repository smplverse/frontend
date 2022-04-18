import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Text } from 'theme-ui'
import { useContract } from '../hooks'

const MintCountContainer = styled.div`
  color: #00ff41;
  font-family: sans-serif;
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
      console.log(contract)
      if (contract) {
        const totalSupply = await contract.totalSupply()
        console.log(totalSupply)
        const collectionSize = await contract.collectionSize()
        console.log(totalSupply)
        setPrice((await contract.mintPrice()).toNumber())
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
