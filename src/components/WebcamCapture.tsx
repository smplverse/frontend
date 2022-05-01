import styled from '@emotion/styled'
import { SMPLverse } from 'contract'
import { useContract } from 'hooks'
import { sha256 } from 'js-sha256'
import { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Webcam from 'react-webcam'
import { Spinner } from 'theme-ui'
import { Text } from 'theme-ui'

import { API_URL } from '../constants'
import { useAvailableTokenId } from '../hooks'
import { ButtonContainer } from './ButtonContainer'
import { CenteredRow } from './Flex'
import { MintTime } from './MintTime'
import { displayErrorToast, displaySuccessToast, Toast } from './Toast'

const WebcamButtonContainer = styled(ButtonContainer)`
  width: 150px;
  display: flex;
  justify-content: center;
`
const InvertOnHover = styled.div`
  &:hover {
    filter: invert(1);
  }
`

const EmptySpace = styled.div`
  width: 30px;
`

const WaitingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 513px;
  width: 513px;
`

const videoConstraints = {
  width: 512,
  height: 512,
  facingMode: 'user',
}

export const WebcamCapture = () => {
  const webcamRef = useRef(null) as any
  const contract = useContract() as SMPLverse
  const [waiting, setWaiting] = useState<boolean>(false)
  const [photo, setPhoto] = useState<string>('')
  const [landmarkedPhoto, setLandmarkedPhoto] = useState<string>('')
  const [hash, setHash] = useState<string>('')
  const [isUploading, setIsUploading] = useState(false)
  const [imgSrc, setImgSrc] = useState<string>('')
  const availableTokenId = useAvailableTokenId()

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    if (imageSrc) {
      setLandmarkedPhoto('')
      // hash everything (including data:image/jpeg;base64,)
      const _hash = '0x' + sha256(imageSrc)
      setPhoto(imageSrc)
      setImgSrc(imageSrc)
      setHash(_hash)
    }
  }, [webcamRef])

  useEffect(() => {
    ;(async function () {
      if (photo) {
        try {
          setWaiting(true)
          const res = await fetch(API_URL + '/detect-face', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              image: photo.split(',')[1],
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
          setWaiting(false)
        } catch (e) {
          if (e.message == 'Failed to fetch') {
            displayErrorToast(
              "Couldn't connect to the backend. Please try again later.",
              'dark'
            )
          }
          setWaiting(false)
        }
      }
    })()
  }, [photo])

  async function upload() {
    if (contract) {
      if (
        !photo ||
        !hash ||
        !landmarkedPhoto ||
        !contract.signer ||
        availableTokenId === undefined
      ) {
        return
      }
      setIsUploading(true)
      // replace setIsUploading with setIsWaiting to refresh
      // use await tx.wait() in minting if not already used
      try {
        const tx = await contract.uploadImage(hash, availableTokenId)
        displaySuccessToast(
          `upload successful:${tx.hash}, claiming SMPL...`,
          'dark'
        )
        try {
          const body = {
            image: photo,
            address: await contract.signer.getAddress(),
            tokenId: availableTokenId.toNumber(),
          }
          console.log(body)
          const res = await fetch(API_URL + '/get-smpl', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(body),
          })
          //
          // add something went wrong here?
          // in case the base64 image is lost the user would not be able to
          // re-upload as the hash would always be different
          //
          // technically this should pass every time but shall assume it might fail
          // due to network issues or sth
          const text = await res.text()
          if (res.status !== 200) {
            displayErrorToast(`Error: ${text}`, 'dark')
            console.log(text)
          }
          const json = JSON.parse(text)
          if (!json.error) {
            // TODO setSmpl to show the smpl obtained
            // setSmpl('data:image/jpeg;base64,' + json.image)
            displaySuccessToast(`SMPL #${2}`, 'dark')
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
        setIsUploading(false)
      } catch (e) {
        if (e.message.includes('cannot estimate gas')) {
          alert(e.message)
        } else {
          displayErrorToast(e.message, 'dark')
        }
      }
      setIsUploading(false)
    }
  }

  return (
    <>
      {!photo ? (
        <>
          <Webcam
            audio={false}
            forceScreenshotSourceSize={true}
            mirrored={true}
            screenshotQuality={1}
            onUserMedia={(media) => console.log(media)}
            onUserMediaError={(e) => alert(e.toString())}
            imageSmoothing={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={513}
            height={513}
            videoConstraints={videoConstraints}
          />
          <MintTime />
          <WebcamButtonContainer onClick={capture}>
            <InvertOnHover>CAPTURE PHOTO</InvertOnHover>
          </WebcamButtonContainer>
        </>
      ) : (
        <>
          {
            /*TODO distinguish between waiting for tx and waiting for backend reply, tx use context, backend nope */ waiting ? (
              <WaitingContainer>
                <Spinner />
              </WaitingContainer>
            ) : (
              <img
                width={512}
                height={512}
                src={imgSrc}
                alt="photo"
                onMouseEnter={() => setImgSrc(photo)}
                onMouseLeave={() => {
                  if (landmarkedPhoto) {
                    setImgSrc(landmarkedPhoto)
                  }
                }}
              />
            )
          }
          {hash && <Text mt={4}>{hash}</Text>}
          <CenteredRow>
            <WebcamButtonContainer
              onClick={() => {
                setPhoto('')
                toast.dismiss()
              }}
            >
              <InvertOnHover>TRY AGAIN</InvertOnHover>
            </WebcamButtonContainer>
            {landmarkedPhoto && (
              <>
                <EmptySpace />
                <WebcamButtonContainer
                  onClick={!isUploading ? upload : () => null}
                >
                  {isUploading ? (
                    <Spinner size={24} color={'black'} />
                  ) : (
                    <>Upload</>
                  )}
                </WebcamButtonContainer>
              </>
            )}
          </CenteredRow>
        </>
      )}
      <Toast />
    </>
  )
}
