<template>
  <div class="sidebar-container">
    <sidebar-logo :is-collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        :unique-opened="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :basePath="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import SidebarLogo from './SidebarLogo.vue'
import SidebarItem from './SidebarItem.vue'
import {computed} from 'vue'
import {constantModules, linkModules} from '@/router'
import {useRoute} from 'vue-router'
import {useSettingStore} from '@/store/setting'
import {usePermissionStore} from '@/store/permission'


export default {
  name: 'Sidebar',
  components: {
    SidebarLogo,
    SidebarItem,
  },
  setup() {
    const settingStore = useSettingStore()
    const permissionStore = usePermissionStore()
    const route = useRoute()
    const isCollapse = computed(() => {
      return !settingStore.showTitle
    })
    const routes = computed(() => {
      return [...constantModules, ...permissionStore.permissionRoutes, ...linkModules]
    })
    const activeMenu = computed(() => {
      const {meta, path} = route
      return meta?.activeMenu || path
    })

    return {
      routes,
      isCollapse,
      activeMenu
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
