import { createRoot } from 'react-dom/client'
import Typewriter from 'typewriter-effect'

import logoString from '../assets/logo-string'

interface Props {
  setEntered: (arg: boolean) => void
}

export const TypeLandingPage = ({ setEntered }: Props) => (
  <div onClick={() => setEntered(true)}>
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1500)
          .typeString(`27,000 EXPRESSION PARAMETERS`)
          .pauseFor(1500)
          .typeString(`<br />7,414 POLYGONS`)
          .pauseFor(1500)
          .typeString(`<br />511 3D SCANS`)
          .pauseFor(1500)
          .typeString(`<br />11 TYPES OF EYEWEAR`)
          .pauseFor(1500)
          .typeString(`<br />ONE YOU`)
          .pauseFor(1500)
          .typeString(`<br />`)
          .typeString(`<br />`)
          .typeString(`<br />`)
          .pauseFor(1500)
          .typeString(`<div id="logo" />`)
          .pasteString(logoString, document.getElementById('logo'))
          .typeString(`<br />`)
          .typeString(`<br />`)
          .typeString(
            ` &gt;&gt;&gt; <span id="enter-button">ENTER</span> &lt;&lt;&lt;`
          )
          .callFunction(() => {
            const div = document.getElementById('enter-button')
            if (!div) return
            const root = createRoot(div)
            root.render(
              <span
                onClick={() => setEntered(true)}
                style={{ cursor: 'pointer' }}
              >
                ENTER
              </span>
            )
          })
          .start()
      }}
      options={{ cursor: '&#9608;', delay: 43 }}
    />
  </div>
)
