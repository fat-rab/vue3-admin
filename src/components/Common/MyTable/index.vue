<template>
  <div class="table-container">
    <el-table
      ref="tableRef"
      v-loading="tableLoading"
      header-cell-class-name="my-table-header"
      row-class-name="my-table-row"
      :data="tableData"
      :row-key="rowKey"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      @select-all="handleSelectAll"
    >
      <el-table-column
        v-if="showSelection"
        :reserve-selection="reserveSelection"
        type="selection"
        width="55"
      />
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        :width="indexWidth"
        fixed="left"
      />
      <template
        v-for="col in columns"
        :key="col.label"
      >
        <el-table-column
          v-if="!col.hidden"
          :label="col.label"
          :prop="col.prop"
          :width="col.width"
          :min-width="col.minWidth"
          :align="col.align || align"
          :header-align="col.headerAlign || align"
          :fixed="col.fixed"
          show-overflow-tooltip
        >
          <template #default="scope">
            <table-slot
              v-if="col.render"
              :renderFn="col.render"
              :row="scope.row"
              :index="scope.$index"
              :column="col"
            />
            <span v-else>
              {{ col.formatter ? col.formatter(scope.row[col.prop], scope.row) : scope.row[col.prop] }}
            </span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="left-footer">
      <!--      <el-checkbox-->
      <!--        v-model="allSelect"-->
      <!--        :isIndeterminate="isIndeterminate"-->
      <!--        class="check-box"-->
      <!--        label="全选"-->
      <!--        @change="handleCheckBox"-->
      <!--      />-->
      <el-link
        v-show="showDeleteBtn"
        :underline="false"
        class="delete-btn"
        type="primary"
        @click="handleDeleteAllSelected"
      >
        删除
      </el-link>
    </div>
    <div class="pagination-container">
      <pagination
        v-if="showPagination"
        v-show="total!==0"
        :currentPage="currentPage"
        :pageSize="pageSize"
        :total="total"
        @handle-current-page="handleCurrentPage"
        @handle-page-size="handlePageSize"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from 'vue'
import Pagination from '../Pagination.vue'
import TableSlot from './TableSlot.vue'
import {ColumnInterface} from '@/ts/table'

export default defineComponent({
  name: 'MyTable',
  components: {
    Pagination,
    TableSlot
  },
  props: {
    indexWidth: {
      type: Number,
      default: 100
    },
    tableData: {
      type: Array,
      required: true
    },
    columns: {
      type: Array as PropType<Array<ColumnInterface>>,
      required: true
    },
    tableLoading: {
      type: Boolean,
      default: () => false
    },
    showSelection: {
      type: Boolean,
      default: () => false
    },
    showIndex: {
      type: Boolean,
      default: () => true
    },
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
    },
    showPagination: {
      type: Boolean,
      default: () => true
    },
    align: {
      type: String,
      default: () => 'left'
    },
    rowKey: {
      type: [String, Function],
      default: () => 'id'
    },
    reserveSelection: {
      type: Boolean,
      default: () => false
    },
  },
  emits: ['handleCurrentPage', 'handlePageSize', 'handleSelectionChange', 'handleDeleteAllSelected'],
  setup(props, context) {
    //const {tableData, currentPage, pageSize} = toRefs(props)
    const {emit} = context
    const tableRef = ref()
    // const allSelect = ref(false)
    // const isIndeterminate = ref(false)
    const showDeleteBtn = ref(false)
    const selectArr = ref([])
    // 用来存储每一页 选中个数
    // const selectObj: PageSelect = {}

    function handleCurrentPage(e: number) {
      emit('handleCurrentPage', e)
    }

    function handlePageSize(e: number) {
      emit('handlePageSize', e)
    }

    // function handleCheckBox() {
    //   tableRef.value?.toggleAllSelection()
    // }

    function handleDeleteAllSelected() {
      emit('handleDeleteAllSelected')
    }

    function handleSelectAll() {
      // allSelect.value = e.length !== 0
      // showDeleteBtn.value = e.length !== 0
    }

    function handleSelectionChange(e: any) {
      selectArr.value = e
      judgeCheckboxStatus()
      emit('handleSelectionChange', e)
      showDeleteBtn.value = e.length !== 0
    }

    function clearSelection() {
      tableRef.value?.clearSelection()
      showDeleteBtn.value = false
    }

    // watch(tableData.value, () => {
    //   judgeCheckboxStatus()
    // })

    function judgeCheckboxStatus() {
      // const tableBody = document.getElementsByClassName('el-table__body-wrapper')[0]
      // console.log(tableBody.children)

    }

    return {
      handleCurrentPage,
      handlePageSize,
      tableRef,
      handleSelectionChange,
      clearSelection,
      handleSelectAll,
      handleDeleteAllSelected,
      showDeleteBtn,
      // allSelect,
      // isIndeterminate
      // handleCheckBox,
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.module";

.table-container {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.pagination-container {
  margin: 24px 20px 0 0;
  padding-bottom: 45px;
  float: right;
}

.left-footer {
  float: left;
  margin: 24px 0 0 12px;

  .check-box {
    vertical-align: middle;
  }

  .delete-btn {
    vertical-align: middle;
    //margin-left: 32px;
  }
}


:deep(.el-table) {
  .my-table-header {
    height: 50px;
    background-color: $tableHeaderColor !important;
  }

  .my-table-row {
    height: 54px;
  }

  //.el-table__body {
  //  .el-table__cell {
  //    .cell {
  //      padding: 0 20px !important;
  //    }
  //  }
  //}

}


</style>
