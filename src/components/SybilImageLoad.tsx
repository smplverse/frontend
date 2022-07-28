import { useBreakpointIndex } from '@theme-ui/match-media'
import { ContractReceipt } from 'ethers'
import { useEffect, useState } from 'react'

import { API_URL } from '../constants-sybil'
import { SybilImage } from './SybilImage'

interface Props {
  txReceipt?: ContractReceipt
}

interface Metadata {
  image: string
}

export const SybilImageLoad = ({ txReceipt }: Props) => {
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  const [metadata, setMetadata] = useState<Metadata>()
  const [imgSrc, setImgSrc] = useState<string>('')

  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? 513 : 256

  useEffect(() => {
    ;(async function () {
      async function imageLoad() {
        try {
          setImageLoading(true)
          if (txReceipt) {
            const external_url =
              API_URL + parseInt(txReceipt.logs[0].topics[3]) + '.json'
            const response = await fetch(external_url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
              },
            })
            const metadata = await response.json()
            setMetadata(metadata)
            setImgSrc(metadata.image)
            setImageLoading(false)
          } else {
            setImageLoading(true)
          }
        } catch (e) {
          if (e.message) {
            alert(e.message)
          }
        }
      }
      if (txReceipt) {
        await imageLoad()
      }
    })()
  }, [txReceipt])

  return (
    <>
      {!imageLoading && metadata ? (
        <img width={x} height={x} src={imgSrc} alt="photo" />
      ) : (
        <SybilImage />
      )}
    </>
  )
}
