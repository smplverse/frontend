import { createRoot } from 'react-dom/client'
import Typewriter from 'typewriter-effect'

import logoString from '../assets/logo-string'

interface Props {
  setEntered: (arg: boolean) => void
}

export const TypeLandingPage = ({ setEntered }: Props) => (
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .pauseFor(3000)
        .typeString(`27,000 EXPRESSION PARAMETERS`)
        .pauseFor(2000)
        .typeString(`<br />7,667 MESH VERTICES`)
        .pauseFor(2000)
        .typeString(`<br />200 SKIN TEXTURES`)
        .pauseFor(2000)
        .typeString(`<br />11 TYPES OF EYEWEAR`)
        .pauseFor(2000)
        .typeString(`<br />ONE YOU`)
        .pauseFor(2000)
        .typeString(`<br />`)
        .typeString(`<br />`)
        .typeString(`<br />`)
        .pauseFor(2000)
        .typeString(`<div id="logo" />`)
        .pasteString(logoString, document.getElementById('logo'))
        .typeString(`<br />`)
        .typeString(`<br />`)
        .typeString(`<span id="enter-button">ENTER</span>`)
        .callFunction(() => {
          const root = createRoot(
            document.getElementById('enter-button') || new HTMLElement()
          )
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
)
