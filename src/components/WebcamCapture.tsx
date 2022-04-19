import styled from '@emotion/styled'
import Webcam from 'react-webcam'
import { useCallback, useRef } from 'react'
import { ButtonContainer } from './ButtonContainer'
import { useState } from 'react'
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
  const [photo, setPhoto] = useState<string>('')
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setPhoto(imageSrc)
  }, [webcamRef])

  function approve() {
    // get a smpl match quickly
    // upload hashes of both of the images
    // send signal to a matcher api
    // OR
    // use some listening api
    // (similar to yield.is liquidator, poll every 10-15s)
    return
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
          <img width={520} height={520} src={photo} alt="photo" />
          <MintTime />
          <CenteredRow>
            <WebcamButtonContainer onClick={() => setPhoto('')}>
              Try again
            </WebcamButtonContainer>
            <EmptySpace />
            <WebcamButtonContainer onClick={approve}>
              Approve
            </WebcamButtonContainer>
          </CenteredRow>
        </>
      )}
    </>
  )
}
