<template>
  <el-pagination
    :total="total"
    :current-page="currentPage"
    :page-size="pageSize"
    layout="total,prev, pager, next,sizes,jumper"
    @update:current-page="handleCurrentPage"
    @update:page-size="handlePageSize"
  />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Pagination',
  components: {},
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  emits: ['handleCurrentPage', 'handlePageSize'],
  setup(props, context) {
    const {emit} = context

    function handleCurrentPage(e: number): void {
      emit('handleCurrentPage', e)
    }

    function handlePageSize(e: number): void {
      emit('handlePageSize', e)

    }

    return {
      handleCurrentPage, handlePageSize
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../styles/variables";

.el-pagination {
  display: flex;
  align-items: center;
  :deep(.btn-prev), :deep(.btn-next) {
    width: 32px;
    height: 32px;
    padding: 0;
    border: 1px solid $borderColor;
    border-radius: 4px;
  }

  :deep(.btn-prev) {
    margin-right: 1px;
  }

  :deep(.btn-next) {
    margin-left: 1px;
  }

  :deep(.el-pager) {
    li {
      padding: 0;
    }

    .number {
      width: 32px;
      height: 32px;
      border: 1px solid $borderColor !important;
      border-radius: 4px;

      &.is-active {
        color: #ffffff;
        background-color: $mainColor !important;
      }
    }
  }

  :deep(.el-pagination__sizes) {
    margin: 0 8px 0 16px;

    .el-input {
      //width: 82px;

      .el-input__inner {
        height: 32px;
        padding-left: 12px;
      }
    }

  }

  :deep(.el-pagination__jump) {
    margin-left: 0;
  }
}
</style>
