import capt from './index.vue'

// @ts-ignore
capt.name = 'gocaptcha-rotate'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-rotate', capt)
}
export default capt