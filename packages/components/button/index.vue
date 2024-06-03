<template>
  <div
    :class="btnClass"
    :style="btnStyle"
    @click="emitClickEvent"
  >
    <div :class="type === 'default' && 'ripple'">
      <btn-default-icon v-if="type === 'default'"/>
      <btn-warn-icon v-else-if="type === 'warn'"/>
      <btn-error-icon v-else-if="type === 'error'"/>
      <btn-success-icon v-else-if="type === 'success'"/>
    </div>
    <span>{{title}}</span>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineEmits, toRefs} from "vue"
import BtnDefaultIcon from "../../assets/icons/btn-default-icon.vue";
import BtnWarnIcon from "../../assets/icons/btn-warn-icon.vue";
import BtnErrorIcon from "../../assets/icons/btn-error-icon.vue";
import BtnSuccessIcon from "../../assets/icons/btn-success-icon.vue";

import {CaptchaConfig, defaultConfig} from "./meta/config";

// @ts-ignore
const props = withDefaults(
    defineProps<{
      config?: CaptchaConfig;
      clickEvent?: () => void;
      disabled?: boolean;
      type?: "default" | "warn" | "error" | "success";
      title?: string;
    }>(),
    {
      config: defaultConfig,
      disabled: false,
      type: "default",
      title: "点击按键进行验证"
    },
)

const { config } = props;
const { type, title, disabled } = toRefs(props);

const btnClass = computed(() => {
  return ["go-captcha", "btnBlock", type.value, disabled.value && "disabled"]
})

const btnStyle = computed(() => {
  return {
    width:  config.width + "px",
    height: config.height + "px",
    paddingLeft: config.verticalPadding + "px",
    paddingRight: config.verticalPadding + "px",
    paddingTop: config.verticalPadding + "px",
    paddingBottom: config.verticalPadding + "px",
  }
})

const emit = defineEmits(["click-event"])
function emitClickEvent(e: any) {
  emit("click-event", e)
}

</script>

<style lang="less">
.go-captcha {
  &.btnBlock {
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

  &.disabled{
    pointer-events: none;
  }

  &.default{
    color: #3e7cff;
    border: 1px solid #50a1ff;
    background: #ecf5ff;
    cursor: pointer;

    &:hover{
      background: #e0efff !important;
    }
  }

  &.error{
    cursor: pointer;
    color: #ed4630;
    background: #fef0f0;
    border: 1px solid #ff5a34;
  }

  &.warn{
    cursor: pointer;
    color: #ffa000;
    background: #fdf6ec;
    border: 1px solid #ffbe09;
  }

  &.success{
    color: #5eaa2f;
    background: #f0f9eb;
    border: 1px solid #8bc640;
    pointer-events: none;
  }

  .ripple{
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

    svg {
      position: relative;
      z-index: 10;
    }

    &::after {
      background: #409eff;
      -webkit-border-radius: 50px;
      -moz-border-radius: 50px;
      border-radius: 50px;
      content: "";
      display: block;
      width: 20px;
      height: 20px;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top:  -10px;
      margin-left:  -10px;
      z-index: 1;

      animation: ripple 1.3s infinite;
      -moz-animation: ripple 1.3s infinite;
      -webkit-animation: ripple 1.3s infinite;
      animation-delay: 2s;
      -moz-animation-delay: 2s;
      -webkit-animation-delay: 2s;
    }
  }
}

@keyframes ripple {
  0% { opacity: 0; }
  5% { opacity: 0.05; }
  20% { opacity: 0.35; }
  65% { opacity: 0.01;  }
  100% {
    transform: scaleX(2) scaleY(2);
    opacity: 0;
  }
}
@-webkit-keyframes ripple {
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
