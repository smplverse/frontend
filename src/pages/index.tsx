import type { NextPage } from 'next'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { useBreakpointIndex } from '@theme-ui/match-media'

import { LandingPage } from './LandingPage'
import { MintPage } from './MintPage'

const Home: NextPage = () => {
  const [entered, setEntered] = useState(false)
  const breakpointIndex = useBreakpointIndex()
  // <Head></Head>
  // import Head from 'next/head'
  return (
    <div>
      <>
        {!entered && breakpointIndex != 0 ? (
          <LandingPage setEntered={setEntered} />
        ) : (
          <MintPage />
        )}
      </>
    </div>
  )
}

export default Home
