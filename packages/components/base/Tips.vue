<template>
  <div
    ref="notification"
    class="notification"
    :class="[typeClass, { show: isVisible }]"
  >
    {{ content }}
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  // 是否显示
  show: {
    type: Boolean,
    default: false
  },
  // 显示内容
  content: {
    type: String,
    default: ''
  },
  // 状态类型
  type: {
    type: String,
    default: 'SUCCESS',
    validator: (value) => ['SUCCESS', 'WARNING', 'ERROR'].includes(value)
  },
  // 自动关闭时间（毫秒），设为0则不自动关闭
  duration: {
    type: Number,
    default: 1500
  }
})

const emit = defineEmits(['update:show'])

const notification = ref(null)
const isVisible = ref(false)
let hideTimeout = null

const typeClass = computed(() => `notification-${props.type.toLowerCase()}`)

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      showNotification()
    } else {
      hideNotification()
    }
  }
)

onMounted(() => {
  if (props.show) {
    showNotification()
  }
})

function showNotification() {
  clearTimeout(hideTimeout)
  isVisible.value = true
  
  if (props.duration > 0) {
    hideTimeout = setTimeout(() => {
      hideNotification()
    }, props.duration)
  }
}

function hideNotification() {
  isVisible.value = false
  emit('update:show', false)
}
</script>

<style lang="less">
.notification {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 16px;
  z-index: 1000;
  padding: 2px;
  
  opacity: 0;
  visibility: hidden;
  transform: translateY(100%);
  
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55),
              opacity 0.4s ease-in-out,
              visibility 0s linear 0.5s;
  
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition-delay: 0s, 0s, 0s;
  }
  
  // 不同类型样式
  &-success {
    background-color: #34a853;
  }
  
  &-warning {
    background-color: #fbbc05;
  }
  
  &-error {
    background-color: #ea4335;
  }
}
</style>