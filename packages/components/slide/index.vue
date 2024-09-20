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
    <div class="gc-body" ref="containerRef" :style="imageStyles">
      <div class="gc-loading">
        <loading-icon />
      </div>
      <img class="gc-picture" v-show="data.image !== ''" :style="imageStyles" :src="data.image" alt="..."/>
      <div class="gc-tile" ref="tileRef" :style="thumbStyles">
        <img v-show="data.thumb !== ''" :src="data.thumb" alt="..."/>
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
import {SlideConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";
import ArrowsIcon from "../../assets/icons/arrows-icon.vue";

import {SlideData} from "./meta/data";
import {SlideEvent} from "./meta/event";
import {useHandler} from "./hooks/handler";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: SlideConfig;
      events?: SlideEvent,
      data: SlideData,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as SlideEvent),
      data: () => ({} as SlideData),
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
const containerRef = ref<any>(null)
const dragBlockRef = ref<any>(null)
const tileRef = ref<any>(null)

const handler = useHandler(data, events, containerRef, tileRef, dragBlockRef, dragBarRef);

const hPadding = config.value.horizontalPadding || 0
const vPadding = config.value.verticalPadding || 0
const width = (config.value.width || 0) + ( hPadding * 2) + (config.value.showTheme ? 2 : 0)

const wrapperStyles = computed(() => {
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
    width: data.thumbWidth + "px",
    height: data.thumbHeight + "px",
    top: data.thumbY + "px",
    left: handler.state.thumbLeft + "px"
  }
})

const imageStyles = computed(() => {
  return {
    width: config.value.width + "px",
    height: config.value.height + "px"
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
  .gc-tile {
    position: absolute;
    z-index: 2;
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
