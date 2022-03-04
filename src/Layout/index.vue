<template>
  <div class="app-wrapper">
    <div :class="[showTitle?'openSidebar':'hideSidebar','layout-container']">
      <sidebar />
    </div>
    <div class="fixed-header">
      <navbar />
      <tags-view />
    </div>
    <app-main />
  </div>
</template>

<script lang="ts">
import Sidebar from "./components/Sidebar/index.vue"
import Navbar from "./components/Navbar/index.vue"
import AppMain from "./AppMain.vue"
import TagsView from "./components/TagsView/index.vue"
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain,
    TagsView
  },
  setup() {
    const store = useStore()
    const showTitle = computed(() => {
      return store.state.setting.showTitle
    })

    return {
      showTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/variables";

.app-wrapper {
  width: 100%;
  height: 100%;

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
  }

  .hideSidebar + .fixed-header {
    width: calc(100% - #{$closeSideBarWidth} - 1px);
  }
}


</style>
