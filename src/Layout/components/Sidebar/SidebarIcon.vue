<template>
  <el-icon class="sidebar-icon">
    <component :is="iconName" />
  </el-icon>
</template>

<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>

</style>
