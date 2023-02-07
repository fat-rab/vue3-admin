<template>
  <div class="icon-container">
    <el-icon class="icon" @click="hiddenSidebar">
      <i-ep-fold v-if="showTitle" />
      <i-ep-expand v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue'
import {SettingActionsEnum} from '@/ts/store/setting'
import {useSettingStore} from '@/store/setting'

export default {
  name: 'FoldIcon',
  emits: ['hiddenSidebar'],
  setup() {
    const settingStore = useSettingStore()
    const showTitle = computed(() => {
      return settingStore.showTitle
    })
    const hiddenSidebar = () => {
      settingStore[SettingActionsEnum.SHOW_TITLE]()
    }
    return {
      hiddenSidebar,
      showTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables";

.icon-container {
  height: $navbarHeight;
  float: left;

  &:hover {
    cursor: pointer
  }

  .icon {
    margin-left: 15px;
    color: #ffffff;
    font-size: 20px;
    margin-top: 12px;
  }

}

</style>
