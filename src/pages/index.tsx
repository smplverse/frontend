import 'react-toastify/dist/ReactToastify.css'

import { useBreakpointIndex } from '@theme-ui/match-media'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

import { LandingPage, MintPage } from '../components'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const breakpointIndex = useBreakpointIndex()
  console.log(router.query)

  const [entered, setEntered] = useState(
    router.query.skipLandingPage === 'true'
  )
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
