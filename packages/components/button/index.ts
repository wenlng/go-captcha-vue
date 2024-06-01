import capt from './index.vue'

// @ts-ignore
capt.name = 'goCaptchaButton'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-button', capt)
}
export default capt