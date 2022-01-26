<template>
  <div v-if="!item.meta||!item.meta.hidden">
    <!--    首页特殊处理-->
    <!--    需要加上!item.meta判断，否则正常只有一个的二级菜单也会拉平渲染成一集菜单-->
    <template v-if="onlyChild&&!onlyChild.children&&!item.meta">
      <sidebar-item-link
        v-if="onlyChild.meta"
        :to="onlyChild.path"
      >
        <el-menu-item
          v-if="onlyChild.meta.title"
          :index="onlyChild.path"
        >
          <el-icon v-if="onlyChild.meta.icon">
            <component :is="onlyChild.meta.icon" />
          </el-icon>
          <span>{{ onlyChild.meta.title }}</span>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-sub-menu v-if="item.meta&&(item.children&&item.children.length>0)" :index="item.path">
      <template #title>
        <el-icon v-if="item.meta &&item.meta.icon">
          <component :is="item.meta.icon" />
        </el-icon>
        <span v-if="item.meta &&item.meta.title">{{ item.meta.title }}</span>
      </template>
      <template v-for="it in item.children" :key="it.path">
        <!--        二级菜单直接渲染-->
        <sidebar-item-link v-if="(!it.children||it.children.length===0)" :to="it.path">
          <el-menu-item
            v-if="it.meta.title"
            :index="it.path"
          >
            <span>{{ it.meta.title }}</span>
          </el-menu-item>
        </sidebar-item-link>
        <!--         三级菜单，再次使用组件，其实就是从el-sub-menu（第18行开始，最开始的针对首页的处理不会渲染了）-->
        <sidebar-item
          v-else
          :item="it"
          :is-collapse="isCollapse"
          class="nest-menu"
        />
      </template>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from "vue";
import {RouteRecordRaw} from "vue-router";
import SidebarItemLink from './SidebarItemLink.vue'

export default defineComponent({
  name: "SidebarItem",
  components: {
    SidebarItemLink
  },
  props: {
    item: {
      type: Object as PropType<RouteRecordRaw>,
      required: true
    },
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const onlyChild = computed(() => {
      if (props.item.children?.length === 1) {
        return props.item.children[0]
      }
      return null
    })
    return {
      onlyChild
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
