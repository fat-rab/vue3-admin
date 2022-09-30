<template>
  <a
    v-if="isExternal(to)"
    :href="to"
    target="_blank"
  >
    <slot />
  </a>
  <div
    v-else
    @click="push"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {isExternal} from '@/utils/validate'
import {useRouter} from 'vue-router'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SidebarItemLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const push = () => {
      router.push(props.to).catch((err) => {
        console.log(err)
      })
    }
    return {
      push,
      isExternal
    }
  }
})
</script>
