<template>
  <div class="navbar-container">
    <fold-icon />
    <bread-crumb />
    <avatar-info />
  </div>
</template>

<script>

import FoldIcon from "./component/FoldIcon.vue"
import BreadCrumb from "./component/BreadCrumb.vue"
import AvatarInfo from "./component/AvatarInfo.vue"

export default {
  name: "Navbar",
  components: {
    FoldIcon,
    BreadCrumb,
    AvatarInfo
  },
  setup() {

    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/variables.module";

.navbar-container {
  height: $navbarHeight;
  background-color: $mainColor;
}
</style>
