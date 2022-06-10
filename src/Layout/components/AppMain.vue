<template>
  <section :class="[showTagsView?'has-tag-view':'',showTitle?'show-title':'','app-main']">
    <div class="main-box">
      <el-scrollbar class="scrollbar-wrapper">
        <router-view v-slot="{Component}">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
              <component :is="Component" :key="key" />
            </keep-alive>
          </transition>
        </router-view>
      </el-scrollbar>
    </div>
  </section>
</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";
import {showTagsView} from "@/setting"
import {useStore} from "vuex";
import {PermissionMutationEnum} from "@/store/ts/permission";

export default {
  name: 'AppMain',
  setup() {
    const route = useRoute()
    const store = useStore()
    const showTitle = computed(() => store.state.setting.showTitle)
    const key = computed(() => route.path)
    // 获取缓存组件数组（储存的是route的name属性，组件name需要和route.name保持一致才能缓存）
    store.commit(`permission/${PermissionMutationEnum.SET_CACHED_ROUTES}`)
    const cachedViews = computed(() => store.state.permission.cachedRoutes)
    // console.log(cachedViews.value, 'cachedViews')
    return {
      cachedViews,
      key,
      showTagsView,
      showTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/variables.module";

.app-main {
  position: absolute;
  top: $navbarHeight;
  right: 0;
  padding: 10px;
  background-color: $bgColor;
  height: calc(100vh - #{$headerHeight} - 20px);
  // sidebar没有使用怪异盒子模型，需要减去1px的右边框
  width: calc(100% - #{$closeSideBarWidth} - 1px - 20px);
  overflow: hidden;
  transition: width 0.28s;

  .main-box {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    transition: width 0.28s;
  }
}

.has-tag-view.app-main {
  top: calc(#{$navbarHeight} + #{$tagsViewHeight});
  height: calc(100vh - #{$navbarHeight} - #{$tagsViewHeight} - 20px);
}

.show-title.app-main {
  // sidebar没有使用怪异盒子模型，需要减去1px的右边框
  width: calc(100% - #{$sideBarWidth} - 1px - 20px);
}
</style>

