<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,i) in breadCrumbList" :key="item.path">
          <span v-if="item.redirect==='noRedirect'||i===breadCrumbList.length-1" class="no-redirect">
            {{ item.meta.title }}</span>
          <a v-else @click="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import {RouteLocationMatched, useRoute, useRouter} from "vue-router";
import {ref, UnwrapRef, watch} from "vue";
import {getBreadCrumbList, pathCompile} from "@/Layout/components/Navbar/composables/BreadCrumb";

export default {
  name: "BreadCrumb",
  components: {},
  setup() {
    const currentRoute = useRoute()
    const router = useRouter()
    let breadCrumbList = ref([] as Array<RouteLocationMatched>)
    watch(() => currentRoute.path, (path) => {
      if (path.startsWith('/redirect/')) {
        return
      }
      breadCrumbList.value = getBreadCrumbList(currentRoute)
    }, {immediate: true})

    const handleLink = function(route: UnwrapRef<RouteLocationMatched>): void {
      // 重定向
      if (route.redirect) {
        router.push(route.redirect as string).catch((err) => {
          console.warn(err)
        })
        return
      }
      router.push(pathCompile(route.path, currentRoute)).catch((err) => {
        console.warn(err)
      })
    }
    return {
      breadCrumbList,
      handleLink
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables";

.breadcrumb-container {
  float: left;

  .el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: $navbarHeight;
    margin-left: 20px;

    .el-breadcrumb__inner {
      a {
        color: #ffffff;
      }
    }

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}

</style>
