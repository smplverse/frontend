import 'react-toastify/dist/ReactToastify.css'

import { useBreakpointIndex } from '@theme-ui/match-media'
import type { NextPage } from 'next'
import Head from 'next/head'

import { SybilMintPage } from '../components'

const Sybilverse: NextPage = () => {
  const breakpointIndex = useBreakpointIndex()
  return (
    <div>
      <Head>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Sybilverse</title>
      </Head>
      <>
        <SybilMintPage />
      </>
    </div>
  )
}

export default Sybilverse
