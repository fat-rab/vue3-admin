<template>
  <div>
    <div v-for="item in tableData" :key="item.title">
      {{ item.title }}
      <div v-for="(it,index) in item.list" :key="index">
        {{ it }}
      </div>
    </div>
    <button @click="test">
      test
    </button>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue'

interface Data {
  title: String
  list: Array<String>
}

export default {
  name: 'Home',
  setup() {

    const tableData = ref<Array<Data>>()
    onMounted(() => {
      setTimeout(() => {
        tableData.value = [{title: 'test', list: ['123']}]
      },2000)
    })
    function  test(){
      tableData.value = [{title: 'test123', list: ['test']}]
    }
    return {
      tableData,
      test
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
