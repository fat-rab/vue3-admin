<template>
  <div>
    <el-icon @click="hiddenSidebar">
      <fold v-if="showTitle" />
      <expand v-else />
    </el-icon>
  </div>
</template>

<script>
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
import {SettingMutationTypes} from "@/store/modules/setting/mutations";

export default defineComponent({
  name: "Navbar",
  emits: ['hiddenSidebar'],
  setup() {
    const store = useStore()
    const showTitle = computed(() => {
      return store.state.setting.showTitle
    })
    const hiddenSidebar = () => {
      store.commit(`setting/${SettingMutationTypes.SHOW_TITLE}`)
    }
    return {
      hiddenSidebar,
      showTitle
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
