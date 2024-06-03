<template>
  <div
      :class="`go-captcha wrapper ${config.showTheme && 'theme'}`"
      :style="wrapperStyles"
  >
    <div class="header">
      <span>请拖动滑块完成拼图</span>
      <div class="iconBlock">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
    </div>
    <div class="body" ref="containerRef" :style="imageStyles">
      <div class="loading">
        <loading-icon />
      </div>
      <img class="picture" v-show="data.image !== ''" :style="imageStyles" :src="data.image" alt="..."/>
      <div class="tile" ref="tileRef" :style="thumbStyles">
        <img v-show="data.thumb !== ''" :src="data.thumb" alt="..."/>
      </div>
    </div>
    <div class="footer">
      <div class="dragSlideBar" ref="dragBarRef" @mousedown="handler.dragEvent">
        <div class="dragLine" />
        <div class="dragBlock" ref="dragBlockRef" @touchstart="handler.dragEvent" :style="{left: handler.state.dragLeft + 'px'}">
        <arrows-icon />
      </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue"
import {CaptchaConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";
import ArrowsIcon from "../../assets/icons/arrows-icon.vue";

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

const dragBarRef = ref<any>(null)
const containerRef = ref<any>(null)
const dragBlockRef = ref<any>(null)
const tileRef = ref<any>(null)

const handler = useHandler(data, events, containerRef, tileRef, dragBlockRef, dragBarRef);

const hPadding = config.horizontalPadding || 0
const vPadding = config.verticalPadding || 0
const width = (config.width || 0) + ( vPadding * 2)

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
    width: data.thumbWidth + "px",
    height: data.thumbHeight + "px",
    top: data.thumbY + "px",
    left: handler.state.thumbLeft + "px"
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
  .tile {
    position: absolute;
    z-index: 30;
    cursor: pointer;

    img {
      display: block;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
}

</style>
