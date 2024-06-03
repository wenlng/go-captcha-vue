# Go Captcha Vue Package

## 
```shell
# Greater than or equal to vue2.7.14 and less than vue3.0
yarn add go-captcha-vue
# or
npm install go-captcha-vue
# or
pnpm install go-captcha-vue

############################################
# Greater than vue3.0
yarn add go-captcha-vue3
# or
npm install go-captcha-vue3
# or
pnpm install go-captcha-vue3
```

Use Go Captcha
```ts
// Greater than or equal to vue2.7.14 and less than vue3.0
import "go-captcha-vue/dist/style.css"
import GoCaptcha from "go-captcha-vue"

/////////////////////////////////////////
// Greater than vue3.0
import "go-captcha-vue3/dist/style.css"
import GoCaptcha from "go-captcha-vue3"


Vue.use(GoCaptcha)
```

## 🖖 Click Mode Captcha
```vue
<gocaptcha-click
  :config="{}"
  :data="{}"
  :events="{}"
/>
```

### params
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
  confirm?: (dots: Array<CaptchaDot>) => boolean;
}
```

## 🖖 Slide Mode Captcha
```vue
<gocaptcha-slide
  :config="{}"
  :data="{}"
  :events="{}"
/>

<gocaptcha-slide-region
  :config="{}"
  :data="{}"
  :events="{}"
/>
```
### params
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
}

// data = {}
interface Data {
  thumbX: number;
  thumbY: number;
  thumbWidth: number;
  thumbHeight: number;
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  move?: (x: number, y: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (point: CaptchaPoint) => boolean;
}
```


## 🖖 Rotate Mode Captcha
```vue
<gocaptcha-rotate
  :config="{}"
  :data="{}"
  :events="{}"
/>
```

### params
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
}

// data = {}
interface Data {
  angle: number;
  image: string;
  thumb: string;
}

// events = {}
interface Events {
  rotate?: (angle: number) => void;
  refresh?: () => void;
  close?: () => void;
  confirm?: (angle: number) => boolean;
}
```