<div align="center">
<img width="120" style="padding-top: 50px; margin: 0;" src="https://github.com/wenlng/git-assets/blob/master/go-captcha/gocaptcha_logo.svg?raw=true"/>
<h1 style="margin: 0; padding: 0">Go Captcha</h1>
<p>Vue 行为验证码</p>

<a href="https://github.com/wenlng/go-captcha-vue/releases"><img src="https://img.shields.io/github/v/release/wenlng/go-captcha-vue.svg"/></a>
<a href="https://www.npmjs.com/package/go-captcha-vue"><img src="https://img.shields.io/npm/v/go-captcha-vue"/></a>
<a href="https://github.com/wenlng/go-captcha-vue/blob/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg"/></a>
<a href="https://github.com/wenlng/go-captcha-vue"><img src="https://img.shields.io/github/stars/wenlng/go-captcha-vue.svg"/></a>
<a href="https://github.com/wenlng/go-captcha-vue"><img src="https://img.shields.io/github/last-commit/wenlng/go-captcha-vue.svg"/></a>

</div>

<br/>

> [English](README.md) | 中文

<br/>

<p style="text-align: center"> ⭐️ 如果能帮助到你，请随手给点一个star</p>
<p style="text-align: center">QQ交流群：178498936</p>

<img src="https://github.com/wenlng/git-assets/blob/master/go-captcha/go-captcha-v2.jpg?raw=true" alt="Poster">

<br/>


| Vue Version            | Go Captcha Version |
|:-----------------------|:------------------:|
| vue >= 2.7.14 && < 3.0 | go-captcha-vue@^1  |
| vue >= 3.0             | go-captcha-vue@^2  |

## 安装
vue版本 >= 2.7.14 并且 < 3.0
```shell
yarn add go-captcha-vue@^1
# or
npm install go-captcha-vue@^1
# or
pnpm install go-captcha-vue@^1
```

vue版本 >= 3.0
```shell
yarn add go-captcha-vue@^2
# or
npm install go-captcha-vue@^2
# or
pnpm install go-captcha-vue@^2
```

## 使用
```ts
import "go-captcha-vue/dist/style.css"
import GoCaptcha from "go-captcha-vue"

Vue.use(GoCaptcha)

// OR
import {Click, Rotate, Slide, SlideRegion, Button} from "go-captcha-vue";
Vue.component('gocaptcha-click', Click)
Vue.component('gocaptcha-rotate', Rotate)
Vue.component('gocaptcha-slide', Slide)
Vue.component('gocaptcha-slide-region', SlideRegion)
Vue.component('gocaptcha-button', Button)
```


## 点选式
```vue
<gocaptcha-click
  :config="{}"
  :data="{}"
  :events="{}"
  ref="domRef"
/>

<script>
  // call methods
  const domRef = ref(null)
  domRef.value.clear()
  domRef.value.refresh()
</script>
```


```ts
// config = {}
interface Config {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  buttonText?: string;
  iconSize?: number;
  dotSize?: number;
}

// data = {}
interface Data {
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  click?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (dots: Array<ClickDot>, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## 滑动式
```vue
<gocaptcha-slide
  :config="{}"
  :data="{}"
  :events="{}"
  ref="domRef"
/>

<script>
// call methods
const domRef = ref(null)
domRef.value.clear()
domRef.value.refresh()
</script>
```


```ts
// config = {}
interface SlideConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface SlideData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface SlideEvents {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlidePoint, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## 拖拽式
```vue
<gocaptcha-slide-region
  :config="{}"
  :data="{}"
  :events="{}"
  ref="domRef"
/>

<script>
// call methods
const domRef = ref(null)
domRef.value.clear()
domRef.value.refresh()
</script>
```


```ts
// config = {}
interface SlideRegionConfig {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface SlideRegionData {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface SlideRegionEvents {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: SlideRegionPoint, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```

## 旋转式
```vue
<gocaptcha-rotate
  :config="{}"
  :data="{}"
  :events="{}"
  ref="domRef"
/>

<script>
// call methods
const domRef = ref(null)
domRef.value.clear()
domRef.value.refresh()
</script>
```


```ts
// config = {}
interface Config {
  width?: number;
  height?: number;
  thumbWidth?: number;
  thumbHeight?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
  showTheme?: boolean;
  title?: string;
  iconSize?: number;
  scope ?: boolean;
}

// data = {}
interface Data {
  image: string;
  thumb: string;
  thumbSize: number;
}

// events = {}
interface Events {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number, reset:() => void) => boolean;
}

// export component method
interface ExportMethods {
  reset: () => void,
  clear: () => void,
  refresh: () => void,
  close: () => void,
}
```



## 按钮
```vue
<gocaptcha-button @clickEvent="() => console.log('hello')"/>
```


```ts
interface $Attr {
  config?: CaptchaConfig;
  disabled?: boolean;
  type?: "default" | "warn" | "error" | "success";
  title?: string;
}

interface $Event {
  clickEvent?: ()=>void;     // event -> @clickEvent=""
}

export interface CaptchaConfig {
  width?: number;
  height?: number;
  verticalPadding?: number;
  horizontalPadding?: number;
}
```

## 👍 赞助一下
<div>
<a href="http://gocaptcha.wencodes.com/sponsor/" target="_blank">http://gocaptcha.wencodes.com/sponsor/</a>
</div>
<br/>