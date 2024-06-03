<template>
  <div
      :class="`go-captcha wrapper ${config.showTheme && 'theme'}`"
      :style="wrapperStyles"
  >
    <div class="header">
      <span>请在下图<em>依次</em>点击：</span>
      <img v-show="data.thumb !== ''" :style="thumbStyles" :src="data.thumb" alt="..." />
    </div>
    <div class="body" :style="imageStyles">
      <div class="loading">
        <loading-icon />
      </div>
      <img :style="imageStyles" v-show="data.image !== ''" class="picture" :src="data.image" alt="..." @click="handler.clickEvent"/>
      <div class="dots">
        <div class="dot" v-for="dot in dots.list" :key="`${dot.key + '-' + dot.index}`" :style="{
          top: (dot.y - 11) + 'px',
          left: (dot.x - 11) + 'px',
        }">{{dot.index}}</div>
      </div>
    </div>
    <div class="footer">
      <div class="iconBlock iconBlock2">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
      <div class="buttonBlock">
        <button @click="handler.confirmEvent">确认</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue"
import {CaptchaConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";

import {CaptchaData} from "./meta/data";
import {CaptchaEvent} from "./meta/event";
import {useHandler} from "./hooks/handler";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: CaptchaConfig;
      events?: CaptchaEvent,
      data: CaptchaData,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as CaptchaEvent),
      data: () => ({} as CaptchaData),
    },
)

const { config, data, events } = props;
const handler = useHandler(data, events);

const hPadding = config.horizontalPadding || 0
const vPadding = config.verticalPadding || 0
const width = (config.width || 0) + ( vPadding * 2)
const dots = handler.dots

const wrapperStyles = computed(() => {
  return {
    width:  width+ "px",
    paddingLeft: vPadding + "px",
    paddingRight: vPadding + "px",
    paddingTop: hPadding + "px",
    paddingBottom: hPadding + "px",
  }
})

const thumbStyles = computed(() => {
  return {
    width: config.thumbWidth + "px",
    height: config.thumbHeight + "px",
  }
})

const imageStyles = computed(() => {
  return {
    width: config.width + "px",
    height: config.height + "px"
  }
})
</script>

<style lang="less">
@import "../../gocaptcha";

.go-captcha {
  .iconBlock2 {
    flex: 1;
  }

  .dots{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .dot {
      position: absolute;
      z-index: 10;
      width: 20px;
      height: 20px;
      color: #cedffe;
      background: #3e7cff;
      border: 2px solid #f7f9fb;
      display:-webkit-box;
      display:-webkit-flex;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-align:center;
      -webkit-align-items:center;
      -ms-flex-align:center;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      cursor: default;
      font-weight: 600;
    }
  }

}
</style>
