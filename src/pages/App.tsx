import { useState } from 'react'

import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'
// import { UploadPage } from './UploadPage'

export const App = () => {
  const [entered, setEntered] = useState(false)
  console.log(entered)
  // return <UploadPage />
  return (
    <>{entered ? <LandingPage setEntered={setEntered} /> : <MintPage />}</>
  )
}
