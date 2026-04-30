<script setup>
import { ref } from 'vue';
// 图片名称数组
const imageList = ref(['1.png', '2.png', '3.gif', '4.gif', '5.gif', '6.gif', '7.png', '8.png']);
// 当前图片索引
const currentIndex = ref(0);
// 上一张（减少索引）
function prev() {
  // 边界判断：防止索引小于0
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
// 下一张（增加索引）
function next() {
  // 边界判断：防止索引超过数组最大长度
  if (currentIndex.value < imageList.value.length - 1) {
    currentIndex.value++;
  }
}
</script>

<template>
  <div class="image-gallery">
    <button @click="prev">上一张</button>
    <img v-bind:src="`/src/assets/imgs/${imageList[currentIndex]}`"
        alt="画廊图片"
        class="image-item"
    >
    <h1>{{imageList[currentIndex]}}</h1>
    <button @click="next">下一张</button>
  </div>

</template>

<style scoped>
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.image-item {
  text-align: center;
}

.image-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-item p {
  margin-top: 8px;
  color: #666;
  font-size: 14px;
}
</style>
