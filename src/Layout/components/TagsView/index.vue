<template>
  <div class="tags-view-container">
    <el-scrollbar wrap-class="tags-view-wrapper" @scroll="handleScroll">
      <router-link
        v-for="item in tagList"
        :key="item.path"
        :class="[isActive(item.path)?'pageTag active':'historyTag','tag-container']"
        :to="{path: item.path,query: item.query}"
        @contextmenu.prevent="openMenu(item,$event)"
      >
        <span class="tag-name">{{ item.title }}</span>
        <i-ep-close v-if="!item.affix" class="el-icon-close" @click.prevent.stop="closeTag(item.path)" />
      </router-link>
    </el-scrollbar>
  </div>
  <ul v-if="showMenu" :style="{left: left+'px',top: top+'px'}" class="contextmenu">
    <li @click="refreshPage">
      刷新
    </li>
    <li v-show="!affix" @click="closeTag(undefined)">
      关闭
    </li>
    <li @click="closeOtherTag">
      关闭其他
    </li>
    <li @click="closeAllTag">
      关闭所有
    </li>
  </ul>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from 'vue'
import {initTagList, isActive} from '@/Layout/components/TagsView/composables'
import {TagDetail, TagsViewActionEnum} from '@/ts/store/tagsView'
import {useRoute, useRouter} from 'vue-router'
import {constantModules} from '@/router'
import variables from '@/styles/variables.module.scss'
import {useTagsViewStore} from '@/store/tagsView'
import {usePermissionStore} from '@/store/permission'
import {useSettingStore} from '@/store/setting'

export default defineComponent({
  name: 'TagsView',
  setup() {
    const tagsViewStore = useTagsViewStore()
    const permissionStore = usePermissionStore()
    const settingStore = useSettingStore()
    const currentRoute = useRoute()
    const router = useRouter()

    let left = ref(0)
    let top = ref(0)
    let showMenu = ref(false)
    let tagObj: TagDetail
    let affix = ref(true)

    initTagsView()
    const tagList = computed(() => tagsViewStore.tagList)
    // 监听路由path
    watch(() => currentRoute.path, () => {
      if (currentRoute.path.indexOf('/redirect') > -1) return
      addTag()
    }, {
      immediate: true
    })
    // 监听右键菜单打开关闭
    watch(() => showMenu.value, (value) => {
      // 点击空白处，关闭右键菜单
      if (value) {
        document.body.addEventListener('click', closeMenu)
      } else {
        document.body.removeEventListener('click', closeMenu)
      }
    })

    function closeTag(path: string | undefined): void {
      if (!path) path = tagObj.path
      tagsViewStore[TagsViewActionEnum.DELETE_TAG](path)
      if (path === currentRoute.path) {
        router.push(tagList.value[tagList.value.length - 1].path)
      }
    }

    function closeOtherTag(): void {
      const path = tagObj.path
      tagsViewStore[TagsViewActionEnum.DELETE_OTHER_TAG](path)
      if (currentRoute.path !== path) router.push(path)
    }

    function closeAllTag(): void {
      tagsViewStore[TagsViewActionEnum.DELETE_ALL_TAG]()
      let jump = true
      // 判断当前页面是否属于固定在tags中的页面
      // 如果是，则不跳转
      tagList.value.forEach((item: TagDetail) => {
        if (item.path === currentRoute.path) jump = false
      })
      if (jump) router.push(tagList.value[0].path)
    }

    // 初始化tag
    function initTagsView() {
      const routes = [...constantModules, ...permissionStore.permissionRoutes]
      const tagsList = initTagList(routes)
      tagsViewStore[TagsViewActionEnum.SET_TAG_LIST](tagsList)
    }

    function addTag() {
      tagsViewStore[TagsViewActionEnum.ADD_TAG_LIST]({
        path: currentRoute.path,
        title: (currentRoute.meta?.title || currentRoute.path) as string,
        affix: !!currentRoute.meta?.affix,
        query: currentRoute.query
      })
    }

    function refreshPage(): void {
      router.replace({path: '/redirect' + tagObj.path, query: tagObj.query})
    }

    function openMenu(tag: TagDetail, e: MouseEvent) {
      affix.value = tag.affix
      tagObj = tag
      let sideBarWidth = Number(variables.sideBarWidthNumber)
      let closeSideBarWidth = Number(variables.closeSideBarWidthNumber)
      const showTitle = settingStore.showTitle
      showMenu.value = true
      if (showTitle) {
        left.value = e.clientX - sideBarWidth
      } else {
        left.value = e.clientX - closeSideBarWidth
      }
      top.value = e.clientY
    }

    function handleScroll() {
      // 滚动滚动条时，关闭右键菜单
      closeMenu()
    }

    function closeMenu() {
      showMenu.value = false
    }

    return {
      tagList,
      closeTag,
      isActive,
      openMenu,
      left,
      top,
      showMenu,
      handleScroll,
      refreshPage,
      closeOtherTag,
      closeAllTag,
      affix
    }
  },

})
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";

.contextmenu {
  background: #fff;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;

    &:hover {
      background: #eee;
      color: $mainColor;
    }
  }
}

.tags-view-container {
  height: $tagsViewHeight;

  .el-scrollbar {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    bottom: 6px;
  }

  .tag-container {
    display: inline-block;
    cursor: pointer;
    height: 32px;
    line-height: 32px;
    border: 1px solid #e5e7ed;
    border-radius: 2px;
    color: #495060;
    background: #fff;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 6px;
    padding: 0 10px;

    &:first-of-type {
      margin-left: 10px;
    }

    &:last-of-type {
      margin-right: 10px;
    }

    &.active {
      background: $mainColor;
      color: #fff;
    }

    .tag-name {
      vertical-align: middle;
    }

    .el-icon-close {
      font-size: 8px;
      border-radius: 50%;
      text-align: center;
      vertical-align: middle;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
    }

    &.pageTag {
      background: #3760f4;
      color: #e6e6e6;

      .el-icon-close {
        color: #e6e6e6;

        &:hover {
          background-color: #ed5858;
          color: #fff;
        }
      }
    }

    &.historyTag {
      background: #fff;
      color: #303133;

      &:hover {
        background: #ecf5ff;
        border: 1px solid #ecf5ff;
      }

      .el-icon-close {
        color: #abadb1;

        &:hover {
          background-color: #ed5858;
          color: #fff;
        }
      }
    }
  }
}

</style>
