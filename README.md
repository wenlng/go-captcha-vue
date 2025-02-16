<div align="center">
<img width="120" style="padding-top: 50px; margin: 0;" src="http://47.104.180.148/go-captcha/gocaptcha_logo.svg?v=1"/>
<h1 style="margin: 0; padding: 0">Go Captcha</h1>
<p>Behavior Captcha For Vue</p>

</div>

<br/>

> English | [中文](README_zh.md)

<br/>

<p> ⭐️ If it helps you, please give a star.</p>

<img src="http://47.104.180.148/go-captcha/go-captcha-v2.jpg" alt="Poster">


| Vue Version            | Go Captcha Version |
|:-----------------------|:------------------:|
| vue >= 2.7.14 && < 3.0 | go-captcha-vue@^1  |
| vue >= 3.0             | go-captcha-vue@^2  |

## Install
Greater than or equal to vue2.7.14 and less than vue3.0
```shell
yarn add go-captcha-vue@^1
# or
npm install go-captcha-vue@^1
# or
pnpm install go-captcha-vue@^1
```

Greater than vue3.0
```shell
yarn add go-captcha-vue@^2
# or
npm install go-captcha-vue@^2
# or
pnpm install go-captcha-vue@^2
```

## Use Go Captcha
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


## Click Mode
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

## Slide Mode
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

## Drag-And-Drop Mode
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

## Rotation Mode
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
  angle: number;
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



## Button
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
