<template>
  <section :class="[showTagsView?'has-tag-view':'',showTitle?'show-title':'','app-main']">
    <div class="main-box">
      <el-scrollbar class="scrollbar-wrapper">
        <router-view v-slot="{Component}">
          <transition name="fade-transform" mode="out-in">
            <keep-alive :include="cachedViews">
              <component :is="Component" />
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

export default {
  name: 'AppMain',
  setup() {
    const route = useRoute()
    const store = useStore()
    const showTitle = computed(() => store.state.setting.showTitle)
    const key = computed(() => route.path)
    const cachedViews = []
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
@import "src/styles/variables.module";

.app-main {
  position: relative;
  top: $navbarHeight;
  // sidebar没有使用怪异盒子模型，需要加上1px的右边框
  left: calc(#{$closeSideBarWidth} + 1px);
  padding: 10px;
  background-color: $bgColor;
  height: calc(100vh - #{$headerHeight} - 20px);
  width: calc(100% - #{$closeSideBarWidth} - 1px - 20px);
  overflow: hidden;
  z-index: -1;

  .main-box {
    height: 100%;
    background-color: #ffffff;
  }
}

.has-tag-view.app-main {
  top: calc(#{$navbarHeight} + #{$tagsViewHeight});
  height: calc(100vh - #{$navbarHeight} - #{$tagsViewHeight} - 20px);
}

.show-title.app-main {
  // sidebar没有使用怪异盒子模型，需要加上1px的右边框
  left: calc(#{$sideBarWidth} + 1px);
  width: calc(100% - #{$sideBarWidth} - 1px - 20px);
}
</style>

