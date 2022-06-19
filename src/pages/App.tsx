import { useState } from 'react'
import { useBreakpointIndex } from '@theme-ui/match-media'

import { WaitingContext } from '../contexts'
import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'

export const App = () => {
  const [entered, setEntered] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)
  const breakpointIndex = useBreakpointIndex()
  return (
    <WaitingContext.Provider value={{ isWaiting, setIsWaiting }}>
      {!entered && breakpointIndex != 0 ? (
        <LandingPage setEntered={setEntered} />
      ) : (
        <MintPage />
      )}
    </WaitingContext.Provider>
  )
}
