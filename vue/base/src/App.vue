<!--javascript-->
<script setup>
  import {ref} from 'vue';
  const message = ref('北京')
  import One from '@/view/one.vue'

</script>
<!--html-->
<template>
  <h1>{{ message }}</h1>
  <One/>
</template>
<!--css-->
<style scoped>

</style>
