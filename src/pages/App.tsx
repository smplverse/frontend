import { useState } from 'react'
import { MintPage } from './MintPage'
import { LandingPage } from './LandingPage'

export const App = () => {
  const [entered, setEntered] = useState(false)
  console.log(entered)
  return (
    <>{!entered ? <LandingPage setEntered={setEntered} /> : <MintPage />}</>
  )
}
