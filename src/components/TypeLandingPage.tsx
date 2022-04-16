import { createRoot } from 'react-dom/client'
import Typewriter from 'typewriter-effect'

interface Props {
  setEntered: (arg: boolean) => void
}

export const TypeLandingPage = ({ setEntered }: Props) => (
  <Typewriter
    onInit={(typewriter) => {
      typewriter
        .pauseFor(2000)
        .typeString(`27,000 EXPRESSION PARAMETERS<br />`)
        .pauseFor(600)
        .typeString(`7,667 MESH VERTICES<br />`)
        .pauseFor(600)
        .typeString(`200 SKIN TEXTURES<br />`)
        .pauseFor(600)
        .typeString(`11 TYPES OF EYEWEAR<br />`)
        .pauseFor(600)
        .typeString(`ONE YOU<br />`)
        .typeString(`<br />`)
        .typeString(`<br />`)
        .typeString(`<div id="logo" />`)
        .pauseFor(600)
        .pasteString(
          `<div style="font-size: 12px">
   _______________/\\/\\/\\/\\/\\__/\\/\\______/\\/\\__/\\/\\/\\/\\/\\____/\\/\\______________
   <br />
   ____________/\\/\\__________/\\/\\/\\__/\\/\\/\\__/\\/\\____/\\/\\__/\\/\\_______________
   <br />
   _____________/\\/\\/\\/\\____/\\/\\/\\/\\/\\/\\/\\__/\\/\\/\\/\\/\\____/\\/\\________________
   <br />
   __________________/\\/\\__/\\/\\__/\\__/\\/\\__/\\/\\__________/\\/\\_________________
   <br />
   _________/\\/\\/\\/\\/\\____/\\/\\______/\\/\\__/\\/\\__________/\\/\\/\\/\\/\\____________
   <br />
   <br />
   ________/\\/\\__/\\/\\____/\\/\\/\\____/\\/\\__/\\/\\____/\\/\\/\\/\\____/\\/\\/\\___________
   <br />
   _______/\\/\\__/\\/\\__/\\/\\/\\/\\/\\__/\\/\\/\\/\\____/\\/\\/\\/\\____/\\/\\/\\/\\/\\__________
   <br />
   ________/\\/\\/\\____/\\/\\________/\\/\\______________/\\/\\__/\\/\\_________________
   <br />
   _________/\\________/\\/\\/\\/\\__/\\/\\________/\\/\\/\\/\\______/\\/\\/\\/\\____________
   <br />
   <br />
    @@@@@@@@@@@@@@@@&@@&@&@&&&@&&&&&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@&@&@@&&@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@&@&@@@@&&&&&@&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@&@@@@&@@&@&&&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@@@&@&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@&&&@@&&&@@&&&&&&&@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*^^^^^^&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@****,*,*,,,.,,.,,,,.,,&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@@@@,****/((///**,,*,,,.,,...,.&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@/***/(####/(#####((/*,,,,*.,*..,#&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@,&#160;&#160;&#160;&#160;&#160;&#160;,&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;(((**,,,,,.,,&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@(&#160;&#160;*****.***/**(/*..**,&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;/**,,,.*,.&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@((.&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;*&&#160;&#160;&#160;&#160;&#160;&#160;&#160;,**/&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;,,,,,.,&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@((&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;**&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;*/,&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;,,,,,,&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@*&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;**,,&#160;&#160;&#160;&#160;&#160;&#160;&#160;/,&#160;&#160;&#160;&#160;&#160;,&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@((&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;****,&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;///*,...&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@/&#160;&#160;*****&#160;&#160;&#160;&#160;&#160;/&#160;&#160;&#160;&#160;&#160;&#160;.,,*/*,&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;/////(///&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@/....,@//*(*///*,*,,,,,..........,/////*/(*/&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@&%#####((/(#%%###((((//////**//***//&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@*%%#(#((#(####%%%####((////***//////&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@/%#((///*,*/#%#%###((((///***/&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@/#%%(((#######(((#((///****//&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@&/%#(/(#####((/////******///&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@/(%%%##(((//******////////*&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@#//////////////((((((///&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@@@%%%%%%%#########((((/*...&&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@@@%,&%%&&&%%%%######(((//*&#160;&#160;.,&&&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@@@@*,,.&&&&&&%%%%%%####(((//*.,,,,,&&&&&&&&&&&&&&&&&&&&&&
    <br />
    @@@@@@@@@@@@@@@@@@,,**,.#%&&&&&%%%%%######((/*.,,,,,,&&&&&&&&&&&&&&&&&&&&&&
    <br />
      </div>
          `,
          document.getElementById('logo')
        )
        .typeString(`<br />`)
        .typeString(`<br />`)
        .typeString(
          `<div id="enter-button" style="display: flex;"> ENTER </div> `
        )
        .callFunction(() => {
          const root = createRoot(
            document.getElementById('enter-button') || new HTMLElement()
          )
          root.render(
            <div
              onClick={() => setEntered(true)}
              style={{ cursor: 'pointer' }}
            >
              ENTER
            </div>
          )
        })
        .start()
    }}
    options={{ cursor: '&#9608;', delay: 43 }}
  />
)
