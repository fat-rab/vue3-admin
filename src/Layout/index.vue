<template>
  <div :class="[showTitle?'openSidebar':'hideSidebar','layout-container']">
    <sidebar class="sidebar-container" />
    <navbar />
  </div>
</template>

<script lang="ts">
import Sidebar from "./components/Sidebar/index.vue"
import Navbar from "./components/Navbar.vue"
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar
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

.openSidebar {
  width: $sideBarWidth;
}
.hideSidebar {
  width: 50px;
}
.layout-container {
  transition: width 0.5s;
  display: flex;
  .sidebar-container {
    width: 100%;
  }
}


</style>
