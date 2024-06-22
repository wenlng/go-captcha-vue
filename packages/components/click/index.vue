<template>
  <div
      :class="`go-captcha gc-wrapper ${config.showTheme ? 'gc-theme' : ''}`"
      :style="wrapperStyles"
  >
    <div class="gc-header">
      <span>{{ config.title }}</span>
      <img v-show="data.thumb !== ''" :style="thumbStyles" :src="data.thumb" alt="..." />
    </div>
    <div class="gc-body" :style="imageStyles">
      <div class="gc-loading">
        <loading-icon />
      </div>
      <img :style="imageStyles" v-show="data.image !== ''" class="gc-picture" :src="data.image" alt="..." @click="handler.clickEvent"/>
      <div class="gc-dots">
        <div class="gc-dot" v-for="dot in dots.list" :key="`${dot.key + '-' + dot.index}`" :style="{
          top: (dot.y - 11) + 'px',
          left: (dot.x - 11) + 'px',
        }">{{dot.index}}</div>
      </div>
    </div>
    <div class="gc-footer">
      <div class="gc-icon-block gc-icon-block2">
        <close-icon :width="22" :height="22" @click="handler.closeEvent"/>
        <refresh-icon :width="22" :height="22" @click="handler.refreshEvent"/>
      </div>
      <div class="gc-button-block">
        <button @click="handler.confirmEvent">{{ config.buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, watch} from "vue"
import {ClickConfig, defaultConfig} from "./meta/config";

import CloseIcon from "../../assets/icons/close-icon.vue";
import RefreshIcon from "../../assets/icons/refresh-icon.vue";
import LoadingIcon from "../../assets/icons/loading-icon.vue";

import {ClickData} from "./meta/data";
import {ClickEvent} from "./meta/event";
import {useHandler} from "./hooks/handler";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: ClickConfig;
      events?: ClickEvent,
      data: ClickData,
    }>(),
    {
      config: defaultConfig,
      events: () => ({} as ClickEvent),
      data: () => ({} as ClickData),
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

const handler = useHandler(data, events);

const hPadding = config.value.horizontalPadding || 0
const vPadding = config.value.verticalPadding || 0
const width = (config.value.width || 0) + ( hPadding * 2) + (config.value.showTheme ? 2 : 0)
const dots = handler.dots

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
    width: config.value.thumbWidth + "px",
    height: config.value.thumbHeight + "px",
  }
})

const imageStyles = computed(() => {
  return {
    width: config.value.width + "px",
    height: config.value.height + "px"
  }
})
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
    }
  }
}
</style>
