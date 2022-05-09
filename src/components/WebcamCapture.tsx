import { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'
import { CurrentTime } from './CurrentTime'

import { WebcamButton } from './WebcamButton'

const videoConstraints = {
  width: 512,
  height: 512,
  facingMode: 'user',
}

interface Props {
  setScreenshot: (screenshot: string) => void
}

export const WebcamCapture = ({ setScreenshot }: Props) => {
  const webcamRef = useRef(null) as any

  const capture = useCallback(() => {
    const screenshot = webcamRef.current.getScreenshot()
    if (screenshot) {
      setScreenshot(screenshot)
    }
  }, [webcamRef, setScreenshot])

  return (
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
      <CurrentTime />
      <WebcamButton onClick={capture}>capture photo</WebcamButton>
    </>
  )
}
