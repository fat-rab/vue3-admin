<template>
  <div>
    <el-table>
      <el-table-column :label="label" />
    </el-table>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Home',
  components: {},
  setup() {
    const label = 'test'
    return {
      label
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
