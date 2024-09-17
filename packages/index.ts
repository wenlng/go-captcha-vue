import  "./gocaptcha.less"
import Click from "./components/click/index"
import Slide from "./components/slide/index"
import SlideRegion from "./components/slide-region/index"
import Rotate from "./components/rotate/index"
import Button from "./components/button/index"

export { Click, Slide, SlideRegion, Rotate, Button };

const INSTALL_TAG = 'go_captcha_installed'
const install = (app: any) => {
  if (app[INSTALL_TAG]) return
  app[INSTALL_TAG] = true
  ;[Click, Slide, SlideRegion, Rotate, Button].map(c => app.use(c))
}

export default install
