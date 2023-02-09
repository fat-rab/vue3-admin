<template>
  <div>
    <div v-for="item in arr" :key="item">
      {{ item }}{{ obj.name }}
    </div>
    <button @click="test">
      test
    </button>
  </div>
</template>

<script lang="ts">

import {onMounted, reactive, ref} from 'vue'
import {ElMessage} from 'element-plus'

export default {
  name: 'Home',
  components: {},
  setup() {
    const arr = ref<Array<number>>([1, 2, 3, 4])
    const data = {
      name: 'tom'
    }
    const obj = reactive(data)

    function test() {
      arr.value[1] = 100
      data.name = 'jerry'
    }

    onMounted(() => {
      ElMessage({
        type: 'success',
        message: '123123'
      })
    })
    return {
      arr,
      test,
      obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
