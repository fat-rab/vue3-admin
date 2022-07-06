<template>
  <div class="title-container">
    <span class="title-border" />
    <span class="title-text">
      {{ formTitle }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  formTitle: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.title-container {
  display: flex;
  align-items: center;

  .title-border {
    width: 4px;
    height: 14px;
    background-color: $mainColor;
    margin: 0 8px 0 20px;
  }

  .title-text {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
}


</style>
