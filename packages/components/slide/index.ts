import capt from './index.vue'

// @ts-ignore
capt.name = 'gocaptcha-slide'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-slide', capt)
}
export default capt