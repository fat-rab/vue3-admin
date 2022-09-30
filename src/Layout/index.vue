<template>
  <div class="app-wrapper">
    <div :class="[showTitle?'openSidebar':'hideSidebar','layout-container']">
      <sidebar />
    </div>
    <div class="fixed-header">
      <navbar />
      <tags-view v-if="showTagsView" />
    </div>
    <app-main />
  </div>
</template>

<script lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain.vue'
import TagsView from './components/TagsView/index.vue'
import {computed} from 'vue'
import {showTagsView} from '@/setting'
import {useSettingStore} from '@/store/setting'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain,
    TagsView
  },
  setup() {
    const settingStore = useSettingStore()
    const showTitle = computed(() => {
      return settingStore.showTitle
    })

    return {
      showTitle,
      showTagsView
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;

  .openSidebar {
    width: $sideBarWidth;
  }

  .hideSidebar {
    width: $closeSideBarWidth;
  }

  .fixed-header {
    // 减去1px的sidebar的border-right
    width: calc(100% - #{$sideBarWidth} - 1px);
    position: fixed;
    top: 0;
    right: 0;
    transition: width 0.28s;
    z-index: 3000;
  }

  .hideSidebar + .fixed-header {
    width: calc(100% - #{$closeSideBarWidth} - 1px);
  }
}


</style>
