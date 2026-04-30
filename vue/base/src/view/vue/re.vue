<script setup>
import { watch, computed, ref } from "vue";

// 1. 计数器
const count = ref(0);
const addCount = () => {
  count.value++;
};

// 2. 数组 + 计算属性（过滤偶数）
const list = ref([1,2,3,4,5,6]);
const evenList = computed(() => {
  return list.value.filter(item => item % 2 === 0);
});

// 3. 监听变量
const see = ref(0);
watch(see, (newValue, oldValue) => {
  console.log('新值：', newValue);
  console.log('旧值：', oldValue);
});


</script>

<template>
  <!-- 计数器 -->
  <h1>{{ count }}</h1>
  <button @click="addCount">点击count+1</button>

  <!-- 数组（计算属性：偶数） -->
  <h1>原数组：{{ list }}</h1>
  <h1>偶数数组：{{ evenList }}</h1>

  <!-- 监听的变量 -->
  <h1>{{ see }}</h1>
  <button @click="see++">点击see+1（控制台看监听）</button>

</template>

<style scoped>

</style>