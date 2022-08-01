import styled from '@emotion/styled'
import { useState } from 'react'
import { Spinner, Text } from 'theme-ui'

import { useMintPriceSybil, useNumberOfRemainingSybil } from '../hooks'

const MintCountContainer = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

export const SybilMintCount = () => {
  const [showPrice, setShowPrice] = useState(false)
  const mintPrice = useMintPriceSybil()
  const numberOfRemaining = useNumberOfRemainingSybil()
  return (
    <div className="blocktext">
      <MintCountContainer
        onMouseEnter={() => setShowPrice(true)}
        onMouseLeave={() => setShowPrice(false)}
      >
        <Text color="text">SOLD OUT</Text>
      </MintCountContainer>
    </div>
  )
}
