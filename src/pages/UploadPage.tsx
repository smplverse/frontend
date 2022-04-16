import { CenteredColumn } from 'components/Flex'
import { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
  width: 512,
  height: 512,
  facingMode: 'user',
}

const WebcamCapture = () => {
  const webcamRef = useRef(null) as any
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    console.log(imageSrc)
  }, [webcamRef])
  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  )
}

export const UploadPage = () => {
  return (
    <CenteredColumn>
      <WebcamCapture />
    </CenteredColumn>
  )
}
