import styled from '@emotion/styled'
import { SMPLverse } from 'contract'
import { useContract } from 'hooks'
import { sha256 } from 'js-sha256'
import { useCallback, useRef } from 'react'
import { useState } from 'react'
import Webcam from 'react-webcam'
import { Spinner } from 'theme-ui'

import { ButtonContainer } from './ButtonContainer'
import { CenteredRow } from './Flex'
import { MintTime } from './MintTime'

const WebcamButtonContainer = styled(ButtonContainer)`
  width: 150px;
  display: flex;
  justify-content: center;
`

const EmptySpace = styled.div`
  width: 30px;
`

const videoConstraints = {
  width: 512,
  height: 512,
  facingMode: 'user',
}

export const WebcamCapture = () => {
  const webcamRef = useRef(null) as any
  const contract = useContract() as SMPLverse
  const [photo, setPhoto] = useState<string>('')
  const [landmarkedPhoto, setLanmarkedPhoto] = useState<string>('')
  const [hash, setHash] = useState<string>('')
  const [isApproving, setIsApproving] = useState(false)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    if (imageSrc) {
      setPhoto(imageSrc)
      setHash('0x' + sha256(photo))
    }
  }, [webcamRef, photo])

  async function detectFace() {
    const res = await fetch('https://api.smplverse.xyz/detect-face', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: photo,
      }),
    })
    const json = await res.json()
    setLanmarkedPhoto(json?.image)
  }

  async function approve() {
    if (contract) {
      setIsApproving(true)
      const hash = '0x' + sha256(photo)
      console.log(hash)
      const tokenIds = await contract.tokensOfOwner(
        await contract.signer.getAddress()
      )
      // TODO check if tokenId already uploaded
      await contract.uploadImage(hash, tokenIds[0])
      setIsApproving(false)
    }
  }

  // TODO there has to be a 'enable webcam' button in case
  // there is not a webcam permission
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
            width={520}
            height={520}
            videoConstraints={videoConstraints}
          />
          <MintTime />
          <WebcamButtonContainer onClick={capture}>
            Capture photo
          </WebcamButtonContainer>
        </>
      ) : (
        <>
          <img
            width={520}
            height={520}
            src={landmarkedPhoto ? landmarkedPhoto : photo}
            alt="photo"
          />
          {hash && <>{hash}</>}
          <MintTime />
          <CenteredRow>
            <WebcamButtonContainer onClick={() => setPhoto('')}>
              Try again
            </WebcamButtonContainer>
            <EmptySpace />
            <WebcamButtonContainer
              onClick={!isApproving ? approve : () => null}
            >
              {isApproving ? (
                <Spinner size={24} color={'black'} />
              ) : (
                <>Approve</>
              )}
            </WebcamButtonContainer>
          </CenteredRow>
        </>
      )}
    </>
  )
}
