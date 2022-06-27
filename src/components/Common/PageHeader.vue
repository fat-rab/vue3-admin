<template>
  <div class="page-title-container">
    <div class="title-container">
      <span class="title-border" />
      <span class="title-text">
        {{ pageTitle }}
      </span>
    </div>
    <div class="btn">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
@import "../../styles/variables.module";

.page-title-container {
  width: 100%;
  height: 56px;
  border-bottom: 1px solid $borderColor;
  display: flex;
  align-items: center;
  justify-content: space-between;

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


  .btn {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
  }
}

</style>
