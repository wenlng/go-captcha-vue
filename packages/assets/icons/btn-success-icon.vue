<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="20" height="20" v-bind="$attrs" @click="emitClickEvent">
    <path fill="#5EAA2F" d="M183.3,27.2L102.4,2.9h-4.9L16.7,27.2C13.4,28.8,11,32,11,35.3v49.4c0,51.8,32.4,93.9,86.6,111.7
	c0.8,0,1.6,0.8,2.4,0.8c0.8,0,1.6,0,2.4-0.8c54.2-17.8,86.6-59.1,86.6-111.7V35.3C189,32,186.6,28.8,183.3,27.2z M146.1,81.4
	l-48.5,48.5c-1.6,1.6-3.2,2.4-5.7,2.4c-2.4,0-4-0.8-5.7-2.4L62,105.7c-3.2-3.2-3.2-8.1,0-11.3c3.2-3.2,8.1-3.2,11.3,0l18.6,18.6
	l42.9-42.9c3.2-3.2,8.1-3.2,11.3,0C149.4,73.3,149.4,78.2,146.1,81.4L146.1,81.4z"/>
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
