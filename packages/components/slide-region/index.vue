<template>
  <div
      :class="`go-captcha gc-wrapper ${config.showTheme ? 'gc-theme' : ''}`"
      :style="wrapperStyles"
  >
    <div class="gc-header gc-header2">
      <span>{{ config.title }}</span>
    </div>
    <div class="gc-body" ref="containerRef" :style="imageStyles">
      <div class="gc-loading">
        <loading-icon />
      </div>
      <img v-show="data.image !== ''" class="gc-picture" :style="imageStyles" :src="data.image" alt="..."/>
      <div class="gc-tile" ref="tileRef" :style="thumbStyles" @mousedown="handler.dragEvent" @touchstart="handler.dragEvent">
        <img v-show="data.thumb !== ''" :src="data.thumb" alt="..."/>
      </div>
    </div>
    <div class="gc-footer">
      <div class="gc-icon-block">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref, watch} from "vue"
import {SlideRegionConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";

import {SlideRegionData} from "./meta/data";
import {SlideRegionEvent} from "./meta/event";
import {useHandler} from "./hooks/handler";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: SlideRegionConfig;
      events?: SlideRegionEvent,
      data: SlideRegionData,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as SlideRegionEvent),
      data: () => ({} as SlideRegionData),
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

const containerRef = ref<any>(null)
const tileRef = ref<any>(null)

const handler = useHandler(data, events, containerRef, tileRef);

const hPadding = config.value.horizontalPadding || 0
const vPadding = config.value.verticalPadding || 0
let width = (config.value.width || 0) + ( hPadding * 2) + (config.value.showTheme ? 2 : 0)

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
    top: handler.state.y + "px",
    left: handler.state.x + "px"
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
  if (tileRef.value) {
    tileRef.value.addEventListener('dragstart', (event: any) => event.preventDefault());
  }
});
</script>

<style lang="less">
.go-captcha {
  .gc-header2 {
    text-align: center;
  }

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
