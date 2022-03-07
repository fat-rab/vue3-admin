<template>
  <div class="icon-container">
    <el-icon class="icon" @click="hiddenSidebar">
      <fold v-if="showTitle" />
      <expand v-else />
    </el-icon>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {SettingMutationEnum} from "@/store/modules/setting/mutations";

export default {
  name: "FoldIcon",
  emits: ['hiddenSidebar'],
  setup() {
    const store = useStore()
    const showTitle = computed(() => {
      return store.state.setting.showTitle
    })
    const hiddenSidebar = () => {
      store.commit(`setting/${SettingMutationEnum.SHOW_TITLE}`)
    }
    return {
      hiddenSidebar,
      showTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../styles/variables.module";

.icon-container {
  height: $navbarHeight;
  float: left;

  &:hover {
    cursor: pointer
  }

  .icon {
    margin-left: 15px;
    color: #ffffff;
    font-size: 20px;
    margin-top: 12px;
  }

}

</style>
