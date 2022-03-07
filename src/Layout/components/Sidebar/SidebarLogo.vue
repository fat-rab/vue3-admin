<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link v-if="isCollapse" key="collapse" class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo">
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo" style="margin-right: 12px">
        <span class="sidebar-title">
          {{ title }}
        </span>
      </router-link>
    </transition>
  </div>
</template>

<script>
import {title} from "@/setting"

export default {
  name: "SidebarLogo",
  props: {
    isCollapse: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    return {
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
      title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.module";

.sidebarLogoFade-enter-active, .sidebarLogoFade-enter-active {
  transition: opacity 0.28s;
}

.sidebarLogoFade-enter-from,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  width: 100%;
  height: $navbarHeight;
  text-align: center;
  line-height: $navbarHeight;
  background-color: $mainColor;

  .sidebar-logo-link {
    height: 100%;

    .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    .sidebar-title {
      color: #fff;
      font-weight: 600;
      text-decoration: none;
      vertical-align: middle;
    }
  }

}


</style>
