import { useState } from 'react'

import { WaitingContext } from '../contexts'
import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'

export const App = () => {
  const [entered, setEntered] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  return (
    <WaitingContext.Provider value={{ isWaiting, setIsWaiting }}>
      {!entered ? <LandingPage setEntered={setEntered} /> : <MintPage />}
    </WaitingContext.Provider>
  )
}
