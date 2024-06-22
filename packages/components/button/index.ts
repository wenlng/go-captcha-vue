/**
 * @Author Awen
 * @Date 2024/06/01
 * @Email wengaolng@gmail.com
 **/

import capt from './index.vue'

// @ts-ignore
capt.name = 'goCaptchaButton'

// @ts-ignore
capt.install = function(Vue: any) {
  Vue.component('gocaptcha-button', capt)
}
export default capt