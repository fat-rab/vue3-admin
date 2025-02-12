<template>
  <div ref="appRef" data-theme="light">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'

const appRef = ref<HTMLDivElement | null>()

onMounted(() => {
  // console.log(appRef.value?.dataset.theme)
  // appRef.value?.setAttribute('data-theme', 'dark')
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

