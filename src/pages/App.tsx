import { useState } from 'react'

import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'

export const App = () => {
  const [entered, setEntered] = useState(false)
  console.log(entered)
  return (
    <>{!entered ? <LandingPage setEntered={setEntered} /> : <MintPage />}</>
  )
}
