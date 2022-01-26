<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFade">
      <router-link to="/" class="sidebar-link">
        <img :class="[isCollapse?'noTitle':'title-logo']" :src="logo" alt="logo">
        <span v-if="!isCollapse" class="sidebar-title">
          {{ title }}
        </span>
      </router-link>
    </transition>
  </div>
</template>

<script>
import {title} from "@/setting"
import logo from "@/assets/images/home/logo.png"

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
      logo,
      title
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables";

.sidebar-logo-container {
  width: 100%;
  height: $logoHeight;
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;

  .sidebar-link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .title-logo {
      height: 100%;
      margin-right: 12px;
    }

    .noTitle {
      height: 60%;
    }

    .sidebar-title {
      margin: 0;
      color: $mainColor;
      font-weight: 600;
      line-height: 50px;
      font-size: 24px;
      text-decoration: none;
    }
  }

}


</style>
