import { useBreakpointIndex } from '@theme-ui/match-media'
import { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'

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

  const breakpointIndex = useBreakpointIndex()
  const x = breakpointIndex > 2 ? 513 : 256

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
        width={x}
        height={x}
        videoConstraints={videoConstraints}
      />
      <WebcamButton onClick={capture}>capture photo</WebcamButton>
    </>
  )
}
