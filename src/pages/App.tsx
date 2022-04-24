import { useState } from 'react'

import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'

// ideally move all the initial state fetching here
// and use zustand or redux but cba to use redux here tbf
export const App = () => {
  const [entered, setEntered] = useState(false)
  if (entered) {
    return <LandingPage setEntered={setEntered} />
  }
  return <MintPage />
}
