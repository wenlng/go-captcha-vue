import capt from './index.vue'

// @ts-ignore
capt.name = 'goCaptchaClick'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-click', capt)
}
export default capt