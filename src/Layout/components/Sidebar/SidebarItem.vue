<template>
  <div v-if="!item.hidden">
    <template v-if="(hasOneShowingChild&&!item.alwaysShow&&!oneShowingChild.children?.length)||(noChildren&&!noRender)">
      <sidebar-item-link v-if="oneShowingChild.meta" :to="resolvePath(oneShowingChild.path)">
        <el-menu-item
          :index="resolvePath(oneShowingChild.path)"
        >
          <sidebar-icon v-if="oneShowingChild.meta?.icon" :icon-name="oneShowingChild.meta?.icon" />
          <template #title>
            <span>{{ oneShowingChild.meta?.title }}</span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>


    <template v-else>
      <el-sub-menu v-if="!noRender" :index="resolvePath(item.path)">
        <template #title>
          <sidebar-icon v-if="item.meta.icon" :icon-name="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :basePath="resolvePath(child.path)"
          class="nest-menu"
        />
      </el-sub-menu>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {AppRouteRecordRaw} from "@/router";
import {judgeShowingChild} from "@/utils/route";
import SidebarIcon from "./SidebarIcon.vue"
import SidebarItemLink from "@/Layout/components/Sidebar/SidebarItemLink.vue";
import {isExternal} from "@/utils/judge";
import path from 'path'

export default defineComponent({
  name: "SidebarItem",
  components: {
    SidebarItemLink,
    SidebarIcon
  },
  props: {
    item: {
      type: Object as PropType<AppRouteRecordRaw>,
      required: true
    },
    basePath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let hasOneShowingChild = false
    //v-if="(hasOneShowingChild&&!item.alwaysShow&&!oneShowingChild.children?.length)||(noChildren&&!noRender)"
    //noChildren&&!noRender：如果没有children并且不是一级菜单，则说明递归到最后一层，直接渲染item

    //oneShowingChildArr如果有且只有一个child，则将其赋值给oneShowingChild
    //通过判断alwaysShow是否总是展示父级菜单。来判断直接渲染还是再次递归，如果直接渲染，则拉平只有一个子菜单的菜单
    //并且通过判断oneShowingChild是否存在children来判断渲染还是递归
    let oneShowingChild = {...props.item}
    let noChildren = false
    const showingChildren = judgeShowingChild(props.item)
    // 判断是否有且只有一个child
    if (showingChildren.length === 1) {
      hasOneShowingChild = true
      oneShowingChild = showingChildren[0]
    }
    if (!showingChildren.length) {
      //如果已经没有showingChildren,说明可能已经到了最后一层，则将本身的path重制为""
      //避免与父级 传递的resolvePath(child.path)拼接出现错误路径
      oneShowingChild = {...props.item, path: ''}
      noChildren = true
    }

    let noRender = false
    if (noChildren && typeof props.item.component === 'object') {
      //v-if="!noRender" 如果一级菜单的children为空，则不渲染
      noRender = true
    }

    function resolvePath(route: string): string {
      if (isExternal(route)) {
        return route
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, route)
    }

    return {
      oneShowingChild,
      hasOneShowingChild,
      noChildren,
      noRender,
      resolvePath
    }
  }
});

</script>

<style lang="scss" scoped>

</style>
