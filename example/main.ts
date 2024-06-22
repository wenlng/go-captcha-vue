import Vue from 'vue'

import App from './App.vue'
// import "../dist/style.css"
// @ts-ignore
// import GoCaptcha from "../dist/go-captcha-vue.es"
import GoCaptcha from "../packages";

// use go captcha
Vue.use(GoCaptcha)

const app = new Vue({
  render: (h) => h(App)
})

app.$mount('#app')
