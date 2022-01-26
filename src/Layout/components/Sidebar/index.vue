<template>
  <div>
    <sidebar-logo :is-collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :unique-opened="false"
        mode="vertical"
        class="el-menu-vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from "./SidebarItem.vue"
import {computed} from "vue";
import {useStore} from "vuex";
import {constantRoutes} from "@/router";
import variables from '@/styles/variables.scss'
export default {
  name: "Sidebar",
  components: {
    SidebarLogo,
    SidebarItem,
  },
  setup() {
    const store = useStore();
    const isCollapse = computed(() => {
      return !store.state.setting.showTitle
    })
    const routes = computed(() => {
      return [...constantRoutes, ...store.state.permission.permissionRoutes,]
    })

    return {
      routes,
      isCollapse,
      variables
    }
  }
}
</script>

<style lang="scss" scoped>


// el-menu 正常展开样式
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  border: none;
}

</style>
