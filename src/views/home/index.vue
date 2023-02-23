<template>
  <div />
</template>

<script lang="ts">


import {onMounted} from 'vue'
// import {alertWarningMessage} from '@/utils/message'
import {confirmMessageBox} from '@/utils/messageBox'

export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      //alertWarningMessage('test')
      confirmMessageBox('warning', 'test')
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
