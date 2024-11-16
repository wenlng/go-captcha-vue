<template>
  <div
      :class="`go-captcha gc-wrapper ${localConfig.showTheme && 'gc-theme'}`"
      :style="wrapperStyles"
      v-show="hasDisplayWrapperState"
      ref="rootRef"
  >
    <div class="gc-header">
      <span>{{ localConfig.title }}</span>
      <div class="gc-icon-block">
        <close-icon :width="localConfig.iconSize" :height="localConfig.iconSize" @click="handler.closeEvent"/>
        <refresh-icon :width="localConfig.iconSize" :height="localConfig.iconSize" @click="handler.refreshEvent"/>
      </div>
    </div>
    <div class="gc-body gc-rotate-body" ref="containerRef" :style="imageBlockStyles">
      <div :style="imageStyles">
        <div class="gc-loading">
          <loading-icon />
        </div>
        <div class="gc-picture gc-rotate-picture" :style="imageStyles">
          <img v-show="hasDisplayImageState" :src="localData.image" alt="" />
          <div class="gc-round" />
        </div>

        <div class="gc-thumb gc-rotate-thumb">
          <div class="gc-rotate-thumb-block" :style="thumbStyles">
            <img v-show="hasDisplayThumbImageState" :src="localData.thumb" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="gc-footer">
      <div class="gc-drag-slide-bar" ref="dragBarRef">
        <div class="gc-drag-line" />
        <div class="gc-drag-block" ref="dragBlockRef" :class="!hasDisplayImageState && 'disabled'" @mousedown="handler.dragEvent" :style="{left: handler.state.dragLeft + 'px'}">
          <div class="gc-drag-block-inline" @touchstart="handler.dragEvent">
            <arrows-icon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, reactive, ref, toRaw, watch} from "vue"

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";
import ArrowsIcon from "../../assets/icons/arrows-icon.vue";

import {RotateConfig, defaultConfig} from "./meta/config";
import {RotateData} from "./meta/data";
import {RotateEvent} from "./meta/event";
import {RotateExpose} from "./meta/expose";
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

const { data, events, config } = props;
const localData = reactive<RotateData>({...toRaw(data)})
const localEvent = reactive<RotateEvent>({...toRaw(events)})
const localConfig = reactive<RotateConfig>({...defaultConfig(), ...toRaw(config)})

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
const dragBarRef = ref<any>(null)
const dragBlockRef = ref<any>(null)

const handler = useHandler(localData, localEvent, localConfig, rootRef, dragBlockRef, dragBarRef);

const wrapperStyles = computed(() => {
  const hPadding = localConfig.horizontalPadding || 0
  const vPadding = localConfig.verticalPadding || 0
  const width = (localConfig.width || 0) + ( hPadding * 2) + (localConfig.showTheme ? 2 : 0)

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

const imageBlockStyles = computed(() => {
  return {
    width: localConfig.width + "px",
    height: localConfig.height + "px"
  }
})

const imageStyles = computed(() => {
  const size = (localConfig.size || 0) > 0 ? localConfig.size : defaultConfig().size
  return {
    width: size  + "px",
    height: size + "px"
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

onMounted(async () => {
  await nextTick();
  if (dragBlockRef.value) {
    dragBlockRef.value.addEventListener('dragstart', (event: any) => event.preventDefault());
  }
});

defineExpose<RotateExpose>({
  reset: handler.resetData,
  clear: handler.clearData,
  refresh: handler.refreshEvent,
  close: handler.closeEvent,
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
