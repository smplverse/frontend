import styled from '@emotion/styled'
import { Spinner } from 'theme-ui'
import { Text } from 'theme-ui'
import { useState, useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { sha256 } from 'js-sha256'

import { displayErrorToast, displaySuccessToast, Toast } from './Toast'
import { useAvailableTokenId, useContract } from '../hooks'
import { API_URL } from '../constants'
import { WaitingContext } from '../contexts'
import { CenteredRow } from './Flex'
import { WebcamButton } from './WebcamButton'
import { WebcamCapture } from './WebcamCapture'

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

  const { isWaiting, setIsWaiting } = useContext(WaitingContext)
  const [waitingForLandmarks, setWaitingForLandmarks] = useState<boolean>()
  const [imageLoading, setImageLoading] = useState<boolean>(false)

  const [landmarkedPhoto, setLandmarkedPhoto] = useState<string>('')
  const [smpl, setSmpl] = useState<string>('')
  const [imgSrc, setImgSrc] = useState<string>('')
  const [hash, setHash] = useState<string>('')
  const availableTokenId = useAvailableTokenId()
  const [confidence, setConfidence] = useState<number>()
  const [screenshot, setScreenshot] = useState<string>('')

  async function detectFace() {
    console.log(API_URL)
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
          'face detected, hover to see original image',
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
        console.log(availableTokenId.toNumber())
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
          setSmpl(metadata.image.replace('ipfs://', 'https://ipfs.io/ipfs/'))
          setConfidence(metadata.attributes[0]?.value ?? 0)
        } catch (e) {
          if (e.message == 'Failed to fetch') {
            displayErrorToast(
              "Couldn't connect to the backend. Please try again later.",
              'dark'
            )
          }
        }
        setIsWaiting(false)
      } catch (e) {
        if (e.message.includes('cannot estimate gas')) {
          alert(e.message)
        } else {
          displayErrorToast(e.message, 'dark')
        }
      }
      setIsWaiting(false)
    }
  }

  useEffect(() => {
    ;(async function () {
      if (screenshot) {
        setLandmarkedPhoto('')
        setSmpl('')
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
                <img
                  width={512}
                  height={512}
                  src={smpl || imgSrc}
                  alt="photo"
                  onMouseEnter={() => setImgSrc(screenshot)}
                  onMouseLeave={() => {
                    if (landmarkedPhoto) {
                      setImgSrc(landmarkedPhoto)
                    }
                  }}
                  onLoad={() => setImageLoading(false)}
                />
              ) : (
                <WaitingContainer>
                  <Spinner />
                </WaitingContainer>
              )}
            </>
          )}
          {(hash || confidence) && <Text mt={4}>{confidence || hash}</Text>}
          <CenteredRow>
            <WebcamButton
              onClick={() => {
                setScreenshot('')
                toast.dismiss()
              }}
            >
              try again
            </WebcamButton>
            {landmarkedPhoto && (
              <>
                <EmptySpace />
                <WebcamButton onClick={!isWaiting ? upload : () => null}>
                  {isWaiting ? (
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
