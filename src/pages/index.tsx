import 'react-toastify/dist/ReactToastify.css'

import { useBreakpointIndex } from '@theme-ui/match-media'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { LandingPage, MintPage } from '../components'

const Home: NextPage = () => {
  const [entered, setEntered] = useState(false)
  const breakpointIndex = useBreakpointIndex()
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SMPLverse</title>
      </Head>
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
