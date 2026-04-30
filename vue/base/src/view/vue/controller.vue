<script setup>
import { useRoute, useRouter} from 'vue-router'
const router = useRouter()
const route = useRoute()

const goList = () =>{
  router.push('/list')
  console.log(router,route)
}
const goHome = () =>{
  router.push('/home')
}
</script>

<template>
  <button @click="goHome">回首页</button>
  <button @click="goList">打开列表</button>
</template>

<style scoped>

</style>