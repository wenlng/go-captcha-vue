import { createApp } from 'vue'

import App from './App.vue'
// import "../dist/style.css"
// @ts-ignore
// import GoCaptcha from "../dist/go-captcha-vue.es"
import GoCaptcha from "../packages";

const app = createApp(App)
// use go captcha
app.use(GoCaptcha)

app.mount('#app')
