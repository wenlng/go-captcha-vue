<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="20" height="20" v-bind="$attrs" @click="emitClickEvent">
    <path d="M131.6,116.3c0,0-75.6,0-109.7,0c-9.1,0-16.2-7.4-16.2-16.2c0-9.1,7.4-16.2,16.2-16.2c28.7,0,109.7,0,109.7,0
	s-5.4-5.4-30.4-30.7c-6.4-6.4-6.4-16.7,0-23.1s16.7-6.4,23.1,0l58.4,58.4c6.4,6.4,6.4,16.7,0,23.1c0,0-32.9,32.9-57.9,57.9
	c-6.4,6.4-16.7,6.4-23.1,0c-6.4-6.4-6.4-16.7,0-23.1C121.8,126.2,131.6,116.3,131.6,116.3z"/>
  </svg>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue'

const emit = defineEmits(["click"])

function emitClickEvent(e: any) {
  emit("click", e)
}
</script>

<style lang="less" scoped>

</style>
