<template>
  <div
      :class="`go-captcha gc-wrapper ${config.showTheme ? 'gc-theme' : ''}`"
      :style="wrapperStyles"
  >
    <div class="gc-header">
      <span>{{ config.title }}</span>
      <div class="gc-icon-block">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
    </div>
    <div class="gc-body gc-rotate-body" ref="containerRef" :style="imageStyles">
      <div class="gc-loading">
        <loading-icon />
      </div>
      <div class="gc-picture gc-rotate-picture" :style="imageStyles">
        <img v-show="data.image !== ''" :src="data.image" alt="..." />
        <div class="gc-round" />
      </div>

      <div class="gc-thumb gc-rotate-thumb">
        <div class="gc-rotate-thumb-block" :style="thumbStyles">
          <img v-show="data.thumb !== ''" :src="data.thumb" alt="..." />
        </div>
      </div>
    </div>
    <div class="gc-footer">
      <div class="gc-drag-slide-bar" ref="dragBarRef">
        <div class="gc-drag-line" />
        <div class="gc-drag-block" ref="dragBlockRef" @mousedown="handler.dragEvent" :style="{left: handler.state.dragLeft + 'px'}">
          <div class="drag-block-inline" @touchstart="handler.dragEvent">
            <arrows-icon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref, watch} from "vue"
import {RotateConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";
import ArrowsIcon from "../../assets/icons/arrows-icon.vue";

import {RotateData} from "./meta/data";
import {RotateEvent} from "./meta/event";
import {useHandler} from "./hooks/handler";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: RotateConfig;
      events?: RotateEvent,
      data: RotateData,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as RotateEvent),
      data: () => ({} as RotateData),
    },
)

const { data, events } = props;
const config = ref({
  ...defaultConfig(),
  ...props.config,
})
watch(() => props.config, () => {
  config.value = {
    ...config.value,
    ...props.config
  }
})

const dragBarRef = ref<any>(null)
const dragBlockRef = ref<any>(null)

const handler = useHandler(data, events, dragBlockRef, dragBarRef);

const wrapperStyles = computed(() => {
  const hPadding = config.value.horizontalPadding || 0
  const vPadding = config.value.verticalPadding || 0
  const width = (config.value.width || 0) + ( hPadding * 2) + (config.value.showTheme ? 2 : 0)

  return {
    width:  width+ "px",
    paddingLeft: hPadding + "px",
    paddingRight: hPadding + "px",
    paddingTop: vPadding + "px",
    paddingBottom: vPadding + "px",
  }
})

const thumbStyles = computed(() => {
  return {
    transform: `rotate(${handler.state.thumbAngle}deg)`
  }
})

const imageStyles = computed(() => {
  const size = (config.value?.size || 0) > 0 ? config.value.size : defaultConfig().size
  return {
    width: size  + "px",
    height: size + "px"
  }
})

onMounted(async () => {
  await nextTick();
  if (dragBlockRef.value) {
    dragBlockRef.value.addEventListener('dragstart', (event: any) => event.preventDefault());
  }
});
</script>

<style lang="less">
.go-captcha {
  .gc-rotate-body {
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

  .gc-rotate-picture {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    z-index: 2;
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

    .gc-round {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 100%;
      z-index: 2;
      border: 6px solid #e0e0e0;
      border-color: var(--go-captcha-theme-round-color);
    }
  }

  .gc-rotate-thumb {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .gc-rotate-thumb-block {
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
