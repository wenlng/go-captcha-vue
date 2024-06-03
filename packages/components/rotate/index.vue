<template>
  <div
      :class="`go-captcha wrapper ${config.showTheme ? 'theme' : ''}`"
      :style="wrapperStyles"
  >
    <div class="header">
      <span>请拖动滑块完成拼图</span>
      <div class="iconBlock">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
    </div>
    <div class="body rotate-body" ref="containerRef" :style="imageStyles">
      <div class="loading">
        <loading-icon />
      </div>
      <div class="picture rotate-picture" :style="imageStyles">
        <img v-show="data.image !== ''" :src="data.image" alt="..." />
        <div class="round" />
      </div>

      <div class="thumb rotate-thumb">
        <div class="rotate-thumbBlock" :style="thumbStyles">
          <img v-show="data.thumb !== ''" :src="data.thumb" alt="..." />
        </div>
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
const dragBlockRef = ref<any>(null)

const handler = useHandler(data, events, dragBlockRef, dragBarRef);

const wrapperStyles = computed(() => {
  const hPadding = config.horizontalPadding || 0
  const vPadding = config.verticalPadding || 0
  const width = (config.width || 0) + ( vPadding * 2)

  return {
    width:  width + "px",
    paddingLeft: vPadding + "px",
    paddingRight: vPadding + "px",
    paddingTop: hPadding + "px",
    paddingBottom: hPadding + "px",
  }
})

const thumbStyles = computed(() => {
  return {
    transform: `rotate(${handler.state.thumbAngle}deg)`
  }
})

const imageStyles = computed(() => {
  return {
    width: config.size + "px",
    height: config.size + "px"
  }
})
</script>

<style lang="less">
@import "../../gocaptcha";

.go-captcha {
  .rotate-body {
    background: transparent !important;
    display: flex;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto 0;
  }

  .rotate-picture {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    z-index: 10;
    border-radius: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }

    .round {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100%;
      z-index: 20;
      border: 6px solid #e0e0e0;
    }
  }

  .rotate-thumb {
    position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .rotate-thumbBlock {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>
