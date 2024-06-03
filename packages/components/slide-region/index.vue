<template>
  <div
      :class="`go-captcha wrapper ${config.showTheme && 'theme'}`"
      :style="wrapperStyles"
  >
    <div class="header header2">
      <span>请拖动滑块完成拼图</span>
    </div>
    <div class="body" ref="containerRef">
      <div class="loading">
        <loading-icon />
      </div>
      <img v-show="data.image !== ''" class="picture" :style="imageStyles" :src="data.image" alt="..."/>
      <div class="tile" ref="tileRef" :style="thumbStyles" @mousedown="handler.dragEvent" @touchstart="handler.dragEvent">
        <img v-show="data.thumb !== ''" :src="data.thumb" alt="..."/>
      </div>
    </div>
    <div class="footer">
      <div class="iconBlock">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref} from "vue"
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

const containerRef = ref<any>(null)
const tileRef = ref<any>(null)

const handler = useHandler(data, events, containerRef, tileRef);

const hPadding = config.horizontalPadding || 0
const vPadding = config.verticalPadding || 0
const width = (config.width || 0) + ( vPadding * 2)

onMounted(async () => {
  await nextTick();
  if (tileRef.value) {
    tileRef.value.addEventListener('dragstart', (event: any) => event.preventDefault());
  }
});

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
    top: handler.state.y + "px",
    left: handler.state.x + "px"
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
  .header2 {
    text-align: center;
  }

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
