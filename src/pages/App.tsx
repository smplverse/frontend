import { useState } from 'react'

import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'
// import { UploadPage } from './UploadPage'

export const App = () => {
  const [entered, setEntered] = useState(false)
  if (entered) {
    return <LandingPage setEntered={setEntered} />
  }
  // else if (gotTokens && want to upload) {
  // return <UploadPage />
  // }
  return <MintPage />
}
