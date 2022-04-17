import { useCallback, useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import { Camera } from '@mediapipe/camera_utils'
import {
  FaceMesh,
  FACEMESH_TESSELATION,
  FACEMESH_RIGHT_EYE,
  FACEMESH_LEFT_EYE,
  FACEMESH_RIGHT_EYEBROW,
  FACEMESH_LEFT_EYEBROW,
  FACEMESH_RIGHT_IRIS,
  FACEMESH_LEFT_IRIS,
  FACEMESH_FACE_OVAL,
  FACEMESH_LIPS,
} from '@mediapipe/face_mesh'
import { drawConnectors } from '@mediapipe/drawing_utils'

export const WebcamCapture = () => {
  const webcamRef = useRef(null) as any
  const canvasRef = useRef(null) as any
  let canvasCtx
  let camera

  useEffect(() => {
    const faceMesh = new FaceMesh({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
    })
    faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    })
    faceMesh.onResults(onResults)
    if (webcamRef.current !== null) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await faceMesh.send({ image: webcamRef.current.video })
        },
        width: 1280,
        height: 720,
      })
      camera.start()
    }
  }, [webcamRef])

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    console.log(imageSrc)
  }, [webcamRef])

  function onResults(results: any) {
    console.log(results)
    // the below doesnt work, need to add ref to the webcam canvas
    canvasCtx = canvasRef.current.getContext('2d')
    const { width, height } = canvasRef.current.canvasCtx.save()
    canvasCtx.clearRect(0, 0, width, height)
    canvasCtx.drawImage(results.image, 0, 0, width, height)
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {
          color: '#C0C0C070',
          lineWidth: 1,
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {
          color: '#FF3030',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {
          color: '#FF3030',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {
          color: '#FF3030',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {
          color: '#30FF30',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {
          color: '#30FF30',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {
          color: '#30FF30',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {
          color: '#E0E0E0',
        })
        drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, {
          color: '#E0E0E0',
        })
      }
    }
    canvasCtx.restore()
  }

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={512}
        height={512}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  )
}

const videoConstraints = {
  width: 512,
  height: 512,
  facingMode: 'user',
}
