<template>
  <div
    :class="`go-captcha gc-wrapper ${localConfig.showTheme && 'gc-theme'}`"
    :style="wrapperStyles"
    v-show="hasDisplayWrapperState"
  >
    <div class="gc-header">
      <span>{{ localConfig.title }}</span>
      <img
        v-show="hasDisplayImageState"
        :style="thumbStyles"
        :src="localData.thumb"
        alt=""
      />
    </div>
    <div class="gc-body" :style="imageStyles">
      <div class="gc-loading">
        <loading-icon />
      </div>
      <img
        :style="imageStyles"
        v-show="hasDisplayImageState"
        class="gc-picture"
        :src="localData.image"
        @click="handler.clickEvent"
        alt=""
      />
      <div class="gc-dots">
        <div
          class="gc-dot"
          v-for="dot in handler.dots.list"
          :key="`${dot.key + '-' + dot.index}`"
          :style="{
            width: localConfig.dotSize + 'px',
            height: localConfig.dotSize + 'px',
            borderRadius: localConfig.dotSize + 'px',
            top: (dot.y - ((localConfig.dotSize || 1)/2)-1) + 'px',
            left: (dot.x - ((localConfig.dotSize || 1)/2)-1) + 'px',
          }"
        >{{dot.index}}</div>
      </div>
    </div>
    <div class="gc-footer">
      <div class="gc-icon-block gc-icon-block2">
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
      <div class="gc-button-block">
        <button
          :class="!hasDisplayImageState && 'disabled'"
          @click="handler.confirmEvent"
        >{{ localConfig.buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, reactive, toRaw, watch} from "vue"
import {ClickConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";

import {ClickData} from "./meta/data";
import {ClickEvent} from "./meta/event";
import {ClickExpose} from "./meta/expose";
import {useHandler} from "./hooks/handler";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: ClickConfig;
      events?: ClickEvent,
      data: ClickData,
      [x: string]: any,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as ClickEvent),
      data: () => ({} as ClickData),
    },
)

const { data, events, config } = props;
const localData = reactive<ClickData>({...toRaw(data)})
const localEvent = reactive<ClickEvent>({...toRaw(events)})
const localConfig = reactive<ClickConfig>({...defaultConfig(), ...toRaw(config)})

watch(() => props.data, (newData, _) => {
  Object.assign(localData, newData)
},{ deep: true });

watch(() => props.events, (newData, _) => {
  Object.assign(localEvent, newData)
},{ deep: true })

watch(() => props.config, (newData, _) => {
  Object.assign(localConfig, newData)
},{ deep: true })

const handler = useHandler(localData, localEvent, () => {
  localData.thumb = ''
  localData.image = ''
});

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
    width: localConfig.thumbWidth + "px",
    height: localConfig.thumbHeight + "px",
  }
})

const imageStyles = computed(() => {
  return {
    width: localConfig.width + "px",
    height: localConfig.height + "px"
  }
})

const hasDisplayImageState = computed(() => {
  return (localData.image && localData.image.length > 0) || (localData.thumb && localData.thumb.length > 0)
})

const hasDisplayWrapperState = computed(() => {
  return (localConfig.width || 0) > 0 || (localConfig.height || 0) > 0
})

defineExpose<ClickExpose>({
  reset: handler.resetData,
  clear: handler.clearData,
  refresh: handler.refresh,
  close: handler.close,
});
</script>

<style lang="less">
.go-captcha {
  .gc-icon-block2 {
    flex: 1;
  }

  .gc-dots{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .gc-dot {
      position: absolute;
      z-index: 2;
      width: 22px;
      height: 22px;
      color: var(--go-captcha-theme-dot-color);
      background: var(--go-captcha-theme-dot-bg-color);
      border: 3px solid #f7f9fb;
      border-color: var(--go-captcha-theme-dot-border-color);
      display:-webkit-box;
      display:-webkit-flex;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-align:center;
      -webkit-align-items:center;
      -ms-flex-align:center;
      align-items: center;
      justify-content: center;
      border-radius: 22px;
      cursor: default;
    }
  }
}
</style>
