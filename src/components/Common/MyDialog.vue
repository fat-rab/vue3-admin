<template>
  <el-dialog
    :model-value="dialogShow"
    :title="title"
    :width="width"
    @close="handleCancel"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button
          type="primary"
          @click="handleSubmit"
        >确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MyDialog',
  components: {},
  props: {
    title: {
      type: String,
      default: () => '提示'
    },
    width: {
      type: String,
      default: () => '50%'
    },
    dialogShow: {
      type: Boolean,
      required: true
    }
  },
  emits: ['handleSubmit', 'handleCancel'],
  setup(props, context) {
    const {emit} = context

    function handleSubmit() {
      emit('handleSubmit')
    }

    function handleCancel() {
      emit('handleCancel')
    }

    return {
      handleSubmit,
      handleCancel
    }

  }
})
</script>

<style lang="scss" scoped>


</style>
