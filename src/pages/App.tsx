import { useState } from 'react'

import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'
import { UploadPage } from './UploadPage'

// ideally move all the initial state fetching here
// and use zustand or redux but cba to use redux here tbf
export const App = () => {
  const [entered, setEntered] = useState(false)
  const gotTokens = false
  const wantToUpload = false
  // return <UploadPage />
  if (entered) {
    return <LandingPage setEntered={setEntered} />
  } else if (gotTokens && wantToUpload) {
    return <UploadPage />
  }
  return <MintPage />
}
