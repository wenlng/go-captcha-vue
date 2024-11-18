<template>
  <div
    :class="`go-captcha gc-wrapper ${localConfig.showTheme && 'gc-theme'}`"
    :style="wrapperStyles"
    v-show="hasDisplayWrapperState"
    ref="rootRef"
  >
    <div class="gc-header gc-header2">
      <span>{{ localConfig.title }}</span>
    </div>
    <div
      class="gc-body"
      ref="containerRef"
      :style="imageStyles"
    >
      <div class="gc-loading">
        <loading-icon />
      </div>
      <img
        v-show="hasDisplayImageState"
        class="gc-picture"
        :style="imageStyles"
        :src="localData.image"
        alt=""
      />
      <div
        class="gc-tile"
        ref="tileRef"
        :style="thumbStyles"
        @mousedown="handler.dragEvent"
        @touchstart="handler.dragEvent"
      >
        <img
          v-show="hasDisplayThumbImageState"
          :src="localData.thumb"
          alt=""
        />
      </div>
    </div>
    <div class="gc-footer">
      <div class="gc-icon-block">
        <close-icon
          :width="localConfig.iconSize"
          :height="localConfig.iconSize"
          @click="handler.closeEvent"
        />
        <refresh-icon
          :width="localConfig.iconSize"
          :height="localConfig.iconSize"
          @click="handler.refreshEvent"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, reactive, ref, toRaw, watch} from "vue"
import {SlideRegionConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";

import {defaultSlideRegionData, SlideRegionData} from "./meta/data";
import {SlideRegionEvent} from "./meta/event";
import {SlideRegionExpose} from "./meta/expose";
import {useHandler} from "./hooks/handler";
import {onUnmounted} from "@vue/runtime-core";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: SlideRegionConfig;
      events?: SlideRegionEvent,
      data: SlideRegionData,
      [x: string]: any,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as SlideRegionEvent),
      data: () => ({} as SlideRegionData),
    },
)

const { data, events, config } = props;
const localData = reactive<SlideRegionData>({...defaultSlideRegionData(), ...toRaw(data)})
const localEvent = reactive<SlideRegionEvent>({...toRaw(events)})
const localConfig = reactive<SlideRegionConfig>({...defaultConfig(), ...toRaw(config)})

watch(() => props.data, (newData, _) => {
  Object.assign(localData, newData)
},{ deep: true });

watch(() => props.events, (newData, _) => {
  Object.assign(localEvent, newData)
},{ deep: true })

watch(() => props.config, (newData, _) => {
  Object.assign(localConfig, newData)
},{ deep: true })

const rootRef = ref<any>(null)
const containerRef = ref<any>(null)
const tileRef = ref<any>(null)

const handler = useHandler(
    localData,
    localEvent,
    localConfig,
    rootRef,
    containerRef,
    tileRef,
    () => {
      localData.thumb = ''
      localData.image = ''
      localData.thumbX = 0
      localData.thumbY = 0
      localData.thumbWidth = 0
      localData.thumbHeight = 0
    }
);

const wrapperStyles = computed(() => {
  const hPadding = localConfig.horizontalPadding || 0
  const vPadding = localConfig.verticalPadding || 0
  let width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)

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
    width: localData.thumbWidth + "px",
    height: localData.thumbHeight + "px",
    top: handler.state.y + "px",
    left: handler.state.x + "px"
  }
})

const imageStyles = computed(() => {
  return {
    width: localConfig.width + "px",
    height: localConfig.height + "px"
  }
})

const hasDisplayImageState = computed(() => {
  return localData.image != ''
})

const hasDisplayThumbImageState = computed(() => {
  return localData.thumb != ''
})

const hasDisplayWrapperState = computed(() => {
  return (localConfig.width || 0) > 0 || (localConfig.height || 0) > 0
})

const fn = (event: any) => event.preventDefault()
onMounted(async () => {
  await nextTick();
  tileRef.value && tileRef.value.addEventListener('dragstart', fn);
});

onUnmounted(() => {
  tileRef.value && tileRef.value.removeEventListener('dragstart', fn);
})

defineExpose<SlideRegionExpose>({
  reset: handler.resetData,
  clear: handler.clearData,
  refresh: handler.refresh,
  close: handler.close,
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
