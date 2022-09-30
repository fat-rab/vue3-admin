<template>
  <div />
</template>

<script lang="ts" setup>
import {useRoute, useRouter} from 'vue-router'
const route = useRoute()
const {query, params} = route
const {path} = params
const router = useRouter()
router.replace({path: '/' + path, query: query})
</script>

