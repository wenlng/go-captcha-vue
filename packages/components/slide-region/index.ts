import capt from './index.vue'

// @ts-ignore
capt.name = 'goCaptchaSlideRegion'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-slide-region', capt)
}
export default capt