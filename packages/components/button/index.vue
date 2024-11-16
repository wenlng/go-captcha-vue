<template>
  <div
    :class="btnClass"
    :style="btnStyle"
    @click="emitClickEvent"
  >
    <div :class="type === 'default' ? 'gc-ripple' : ''">
      <btn-default-icon v-if="type === 'default'"/>
      <btn-warn-icon v-else-if="type === 'warn'"/>
      <btn-error-icon v-else-if="type === 'error'"/>
      <btn-success-icon v-else-if="type === 'success'"/>
    </div>
    <span>{{title}}</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineEmits, reactive, toRaw, toRefs, watch} from "vue"
import BtnDefaultIcon from "../../assets/icons/btn-default-icon.vue";
import BtnWarnIcon from "../../assets/icons/btn-warn-icon.vue";
import BtnErrorIcon from "../../assets/icons/btn-error-icon.vue";
import BtnSuccessIcon from "../../assets/icons/btn-success-icon.vue";

import {ButtonConfig, defaultConfig} from "./meta/config";
import {ButtonType} from "@/components/button/meta/types";
import {ClickConfig} from "@/components/click/meta/config";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: ButtonConfig;
      clickEvent?: () => void;
      disabled?: boolean;
      type?: ButtonType;
      title?: string;
    }>(),
    {
      config: defaultConfig,
      disabled: false,
      type: "default",
      title: "点击按键进行验证"
    },
)

const { type, title, disabled, config } = toRefs(props);
const localConfig = reactive<ClickConfig>({...defaultConfig(), ...toRaw(config)})

watch(() => props.config, (newData, _) => {
  Object.assign(localConfig, newData)
},{ deep: true })

const btnClass = computed(() => {
  const tc = `gc-${type.value}`
  return ["go-captcha", "gc-btn-block", tc, disabled.value ? "gc-disabled" : ""]
})

const btnStyle = computed(() => {
  return {
    width:  localConfig.width + "px",
    height: localConfig.height + "px",
    paddingLeft: localConfig.horizontalPadding + "px",
    paddingRight: localConfig.horizontalPadding + "px",
    paddingTop: localConfig.verticalPadding + "px",
    paddingBottom: localConfig.verticalPadding + "px",
  }
})

const emit = defineEmits(["click-event"])
function emitClickEvent(e: any) {
  emit("click-event", e)
}

</script>

<style lang="less">
.go-captcha {
  &.gc-btn-block {
    position: relative;
    box-sizing: border-box;

    display: block;
    font-size: 13px;

    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    letter-spacing: 1px;
    border-radius: 5px;
    line-height: 1;
    white-space: nowrap;
    -webkit-appearance: none;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;

    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -webkit-align-items:center;
    -ms-flex-align:center;
    align-items: center;
    justify-content: center;
    justify-items: center;

    box-shadow: 0 0 20px rgba(62, 124, 255, 0.1);
    -webkit-box-shadow: 0 0 20px rgba(62, 124, 255, 0.1);
    -moz-box-shadow: 0 0 20px rgba(62, 124, 255, 0.1);

    span{
      padding-left: 8px;
    }
  }

  &.gc-disabled{
    pointer-events: none;
  }

  &.gc-default{
    color: var(--go-captcha-theme-default-color);
    border: 1px solid #50a1ff;
    border-color: var(--go-captcha-theme-default-border-color);
    background-color: var(--go-captcha-theme-default-bg-color);
    cursor: pointer;

    &:hover{
      background-color: var(--go-captcha-theme-default-hover-color) !important;
    }
  }

  &.gc-error{
    cursor: pointer;
    color: var(--go-captcha-theme-error-color);
    background-color: var(--go-captcha-theme-error-bg-color);
    border: 1px solid #ff5a34;
    border-color: var(--go-captcha-theme-error-border-color);
  }

  &.gc-warn{
    cursor: pointer;
    color: var(--go-captcha-theme-warn-color);
    background-color: var(--go-captcha-theme-warn-bg-color);
    border: 1px solid #ffbe09;
    border-color: var(--go-captcha-theme-warn-border-color);
  }

  &.gc-success{
    color: var(--go-captcha-theme-success-color);
    background-color: var(--go-captcha-theme-success-bg-color);
    border: 1px solid #8bc640;
    border-color: var(--go-captcha-theme-success-border-color);
    pointer-events: none;
  }

  .gc-ripple{
    position: relative;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
    -webkit-align-items:center;
    -ms-flex-align:center;
    align-items: center;
    justify-content: center;
    justify-items: center;

    & > *{
      z-index: 2;
    }

    svg {
      position: relative;
      z-index: 2;
    }

    &::after {
      background-color: var(--go-captcha-theme-default-border-color);
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
      content: "";
      display: block;
      width: 21px;
      height: 21px;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top:  -11px;
      margin-left:  -11px;
      z-index: 1;

      animation: gc-ripple 1.3s infinite;
      -moz-animation: gc-ripple 1.3s infinite;
      -webkit-animation: gc-ripple 1.3s infinite;
      animation-delay: 2s;
      -moz-animation-delay: 2s;
      -webkit-animation-delay: 2s;
    }
  }
}

@keyframes gc-ripple {
  0% { opacity: 0; }
  5% { opacity: 0.05; }
  20% { opacity: 0.35; }
  65% { opacity: 0.01;  }
  100% {
    transform: scaleX(2) scaleY(2);
    opacity: 0;
  }
}
@-webkit-keyframes gc-ripple {
  0% { opacity: 0; }
  5% { opacity: 0.05; }
  20% { opacity: 0.35; }
  65% { opacity: 0.01;  }
  100% {
    transform: scaleX(2) scaleY(2);
    opacity: 0;
  }
}

</style>
