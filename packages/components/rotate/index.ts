import capt from './index.vue'

// @ts-ignore
capt.name = 'goCaptchaRotate'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-rotate', capt)
}
export default capt