import styled from '@emotion/styled'
import { useBreakpointIndex } from '@theme-ui/match-media'
import { sha256 } from 'js-sha256'
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Box, Link, Spinner } from 'theme-ui'
import { Text } from 'theme-ui'

import { API_URL } from '../constants'
import { WaitingContext } from '../contexts'
import { useAvailableTokenId, useContract, useTokenBalance } from '../hooks'
import { sliceUp } from '../utils'
import { CenteredRow } from './Flex'
import { displayErrorToast, displaySuccessToast, Toast } from './Toast'
import { WebcamButton } from './WebcamButton'
import { WebcamCapture } from './WebcamCapture'

interface Metadata {
  name: string
  description: string
  image: string
  smpl_image: string
  attributes: Array<{ [key: string]: string }>
  external_url: string
}

const EmptySpace = styled.div`
  width: 30px;
`

const WaitingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 513px;
  width: 513px;
  border: 1px solid green;
`

export const WebcamPanel = () => {
  const contract = useContract()
  const tokenBalance = useTokenBalance()

  const { isWaiting, setIsWaiting } = useContext(WaitingContext)
  const [waitingForLandmarks, setWaitingForLandmarks] = useState<boolean>()
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  const [metadata, setMetadata] = useState<Metadata>()

  const [landmarkedPhoto, setLandmarkedPhoto] = useState<string>('')
  const [imgSrc, setImgSrc] = useState<string>('')
  const [hash, setHash] = useState<string>('')
  const availableTokenId = useAvailableTokenId()
  const [screenshot, setScreenshot] = useState<string>('')

  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? 513 : 256

  async function upload() {
    if (contract) {
      if (
        !screenshot ||
        !hash ||
        !landmarkedPhoto ||
        !contract.signer ||
        availableTokenId === undefined
      ) {
        return
      }
      setIsWaiting(true)
      try {
        const tx = await contract.uploadImage(hash, availableTokenId)
        await tx.wait()
        displaySuccessToast(`upload successful, claiming SMPL...`, 'dark')
        try {
          const body = {
            image: screenshot,
            address: await contract.signer.getAddress(),
            tokenId: availableTokenId.toNumber(),
          }
          setImageLoading(true)
          const res = await fetch(API_URL + '/get-smpl', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(body),
          })
          //
          // add something went wrong, please contact ... here?
          // in case the base64 image is lost the user would not be able to
          // re-upload as the hash would always be different
          //
          // technically this should pass every time but shall assume it might fail
          // due to network issues or sth
          const text = await res.text()
          if (res.status !== 200) {
            displayErrorToast(`Error: ${text}`, 'dark')
          }
          const metadata = JSON.parse(text)
          console.log(metadata)
          displaySuccessToast(metadata.name, 'dark')
          setMetadata(metadata)
          setImgSrc(metadata.external_url)
          setImageLoading(false)
        } catch (e) {
          if (e.message == 'Failed to fetch') {
            displayErrorToast(
              "Couldn't connect to the backend. Please try again later.",
              'dark'
            )
          }
        }
        setIsWaiting(false)
        setImageLoading(false)
      } catch (e) {
        if (e.message.includes('cannot estimate gas')) {
          alert(e.message)
        } else {
          displayErrorToast(e.message, 'dark')
        }
      }
      setIsWaiting(false)
      setImageLoading(false)
    }
  }

  useEffect(() => {
    ;(async function () {
      async function detectFace() {
        try {
          setWaitingForLandmarks(true)
          const res = await fetch(API_URL + '/detect-face', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              image: screenshot,
            }),
          })
          const json = await res.json()
          if (!json.error) {
            setLandmarkedPhoto('data:image/jpeg;base64,' + json.image)
            setImgSrc('data:image/jpeg;base64,' + json.image)
            displaySuccessToast(
              'Face detected. Hover to see original image.',
              'dark'
            )
          } else {
            displayErrorToast(json.error, 'dark')
          }
        } catch (e) {
          if (e.message == 'Failed to fetch') {
            displayErrorToast(
              "Couldn't connect to the backend. Please try again later.",
              'dark'
            )
          }
        }
        setWaitingForLandmarks(false)
      }

      if (screenshot) {
        setLandmarkedPhoto('')
        const _hash = '0x' + sha256(screenshot)
        setImgSrc(screenshot)
        setHash(_hash)
        await detectFace()
      }
    })()
  }, [screenshot])

  return (
    <>
      {!screenshot ? (
        <WebcamCapture setScreenshot={setScreenshot} />
      ) : (
        <>
          {waitingForLandmarks ? (
            <WaitingContainer>
              <Spinner />
            </WaitingContainer>
          ) : (
            <>
              {!imageLoading ? (
                metadata?.smpl_image ? (
                  <img
                    width={x}
                    height={x}
                    src={imgSrc}
                    alt="photo"
                    onMouseEnter={() => setImgSrc(screenshot)}
                    onMouseLeave={() => {
                      if (metadata?.external_url) {
                        setImgSrc(metadata.external_url)
                      }
                    }}
                  />
                ) : (
                  <img
                    width={x}
                    height={x}
                    src={imgSrc}
                    alt="photo"
                    onMouseEnter={() => setImgSrc(screenshot)}
                    onMouseLeave={() => {
                      if (landmarkedPhoto) {
                        setImgSrc(landmarkedPhoto)
                      }
                    }}
                  />
                )
              ) : (
                <WaitingContainer>
                  <Spinner />
                </WaitingContainer>
              )}
            </>
          )}
          {metadata ? (
            <>
              <Link
                sx={{ mt: 3 }}
                href={metadata.image.replace(
                  'ipfs://',
                  'https://ipfs.io/ipfs/'
                )}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {metadata.image}
              </Link>
              <Box
                sx={{
                  mt: 3,
                  flexDirection: 'column',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <Text>{metadata.name}</Text>
                <Text>confidence: {metadata?.attributes[0]?.value} </Text>
                <Text>
                  clustered:{' '}
                  {String(metadata.attributes.length === 3).toLowerCase()}
                </Text>
              </Box>
            </>
          ) : (
            <>
              {hash && (
                <Text mt={4}>
                  {breakpointIndex < 2 ? 'img_hash: ' + sliceUp(hash) : hash}
                </Text>
              )}
            </>
          )}
          <CenteredRow>
            {!isWaiting && Boolean(tokenBalance) && (
              <>
                <WebcamButton
                  onClick={() => {
                    setScreenshot('')
                    setMetadata(undefined)
                    toast.dismiss()
                  }}
                >
                  {metadata ? 'claim another' : 'try again'}
                </WebcamButton>
              </>
            )}
            {!isWaiting && !metadata && landmarkedPhoto && <EmptySpace />}
            {landmarkedPhoto && !metadata && (
              <>
                <WebcamButton onClick={!isWaiting ? upload : () => null}>
                  {isWaiting && Boolean(tokenBalance) ? (
                    <Spinner size={24} color={'black'} />
                  ) : (
                    <>upload</>
                  )}
                </WebcamButton>
              </>
            )}
          </CenteredRow>
        </>
      )}
      <Toast />
    </>
  )
}
