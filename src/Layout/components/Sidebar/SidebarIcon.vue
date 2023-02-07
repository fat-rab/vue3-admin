<template>
  <img class="sidebar-icon" :src="iconPath" :alt="iconName">
</template>

<script lang="ts">
import {defineComponent, ref, toRefs, watch} from 'vue'
import {useRoute} from 'vue-router'

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const {iconName} = toRefs(props)
    const route = useRoute()
    const iconPath = ref()


    function getImagePath(): void {
      // 动态引入的图片需要放到public文件夹中，否则不会打包进dist
      let imagePath = `/images/menu/${iconName.value}.svg`
      // route.meta会合并父路由到子路由的meta的所有信息，所以不需要获取父路由meta.icon
      if (route.meta.icon && route.meta.icon === iconName.value) {
        imagePath = `/images/menu/${iconName.value}-active.svg`
      }
      iconPath.value = new URL(imagePath, import.meta.url).href
    }

    // 通过相对路径能得到一个被完整解析的静态资源URL：
    watch(() => route.path, () => {
      getImagePath()
    })
    getImagePath()
    return {
      iconPath
    }
  }
})
</script>

<style lang="scss" scoped>

</style>

<!--如果使用element-icon则使用下面的代码-->

<!--<template>-->
<!--  <el-icon class="sidebar-icon">-->
<!--    <component :is="iconName" />-->
<!--  </el-icon>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--defineProps({-->
<!--  iconName: {-->
<!--    type: String,-->
<!--    required: true-->
<!--  }-->
<!--})-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->
