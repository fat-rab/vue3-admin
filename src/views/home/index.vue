<template>
  <div>
    <div v-for="item in arr" :key="item" style="width: 400px;height: 200px;border: 1px solid red">
      <video :id="item" style="width: 100%;height: 100%" autoplay />
    </div>
    <button @click="test">
      test
    </button>
  </div>
</template>

<script lang="ts">


import {onMounted, ref} from 'vue'

export default {
  name: 'Home',
  setup() {
    const arr = ref(['1', '2'])
    onMounted(() => {
      const ele = document.getElementById('1')
      navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
        if (ele) {
          ele.srcObject = stream
        }
      })
      // alertWarningMessage('test')
      // confirmMessageBox('warning', 'test')
    })

    function test() {
      arr.value.reverse()
    }

    return {
      arr,
      test
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
