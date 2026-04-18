<script setup>
  import { ref } from 'vue'
  const start = ref(0);
  start.value = 666;
  const end = ref([]);
  end.value = ['1','2','3'];
  // v-html
  const message = ref('0');
  message.value = '<a href="https://www.douyin.com">v-html:douyin</a>';
  // v-show,v-if
  const show_boolean = ref(true)
  const if_boolean = ref(true)
  // v-on
  // v-on:click	@click	点击事件,v-on:input	@input	输入框输入时触发
  //v-on:submit	@submit	表单提交,v-on:keyup	@keydown	键盘按下 @keyup.enter
  const sum = ref('0');
  function add(price) {
    model.value = sum.value + price;
  }
  // v-bind动态
  const url = ref('0');
  url.value = 'https://www.douyin.com';
  const precent = ref(0);
  precent.value = 50;
  // v-model，return表格
  // v-model.trim 去除空格，v-model.number 转数字

  const model = ref(0);
  //v-for
  const studentList = [
    { id: 1, name: '张三', age: 18 },
    { id: 2, name: '李四', age: 19 },
    { id: 3, name: '王五', age: 20 }
  ]
  // .prenent 阻止  .stop只执行子类

</script>

<template>
<!-- 开始-->
  <div><p>start:{{start}}</p></div>
<!--  v-html -->
  <div v-html="message"></div>
<!--  v-show-->
  <div>
    <h1 v-show="show_boolean">show</h1>
    <h1 v-if="if_boolean">if</h1>
  </div>
<!--  v-on-->
  <div>
    <span @click="sum++">点击+1</span>
    <span><h1>{{sum}}</h1></span>
    <span @click="sum--">点击-1</span>
    <span @click="add(100)">点击+100</span>
  </div>
<!--  v-bind-->
  <div><a v-bind:href="url">v-bind:抖音官网</a></div>
  <div v-bind:class="{box: true}">class</div>
  <div class="progress">
    <div class="inner" :style="{width: precent +'%'}"><span>{{precent}}%</span></div>
  </div>

    <!--  v-model-->
  <div>
    <input type="text" v-model="model">
    <p>v-model:{{model}}</p>
  </div>
<!--  v-for-->
  <div v-for="item in studentList" :key="item.id"> 姓名：{{ item.name }}，年龄：{{ item.age }}</div>
</template>

<style scoped>
  .box{
    background-color:pink;
    height: 300px;
    width: 300px;
  }
  .progress {
    height: 25px;
    width: 400px;
    border-radius: 15px;
    background-color: #272425;
    border: 3px solid #272425;
    box-sizing: border-box;
    margin-bottom: 30px;
  }
  .inner {
    width: 50%;
    height: 20px;
    border-radius: 10px;
    text-align: right;
    position: relative;
    background-color: #409eff;
    background-size: 20px 20px;
    box-sizing: border-box;
    transition: all 1s;
  }
  .inner span {
    position: absolute;
    right: -20px;
    bottom: -25px;
  }

</style>