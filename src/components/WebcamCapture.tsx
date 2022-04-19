import styled from '@emotion/styled'
import Webcam from 'react-webcam'
import { useCallback, useRef } from 'react'
import { ButtonContainer } from './ButtonContainer'
import { useState } from 'react'
import { CenteredRow } from './Flex'

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
    return
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
            width={520}
            height={520}
            videoConstraints={videoConstraints}
          />
          <WebcamButtonContainer onClick={capture}>
            Capture photo
          </WebcamButtonContainer>
        </>
      ) : (
        <>
          <img src={photo} alt="photo" />
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
