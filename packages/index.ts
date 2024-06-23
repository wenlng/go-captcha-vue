import  "./gocaptcha.less"
import Click from "./components/click/index"
import Slide from "./components/slide/index"
import SlideRegion from "./components/slide-region/index"
import Rotate from "./components/rotate/index"
import Button from "./components/button/index"

export { Click, Slide, SlideRegion, Rotate, Button };

const install = (app: any) => {
  if (app['installed']) return
  app['installed'] = true
  ;[Click, Slide, SlideRegion, Rotate, Button].map(c => app.use(c))
}

export default install
