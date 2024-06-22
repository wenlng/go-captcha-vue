import  "./gocaptcha.less"
import Click from "./components/click/index"
import Slide from "./components/slide/index"
import SlideRegion from "./components/slide-region/index"
import Rotate from "./components/rotate/index"
import Button from "./components/button/index"

export { Click, Slide, SlideRegion, Rotate, Button };

const installed = {
  install(vue: any) {
    // @ts-ignore
    Click.install(vue)
    // @ts-ignore
    Slide.install(vue)
    // @ts-ignore
    SlideRegion.install(vue)
    // @ts-ignore
    Rotate.install(vue)
    // @ts-ignore
    Button.install(vue)
  }
}

export default installed
