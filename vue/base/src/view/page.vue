<!--<template>-->
<!--  <el-pagination background layout="prev, pager, next" :total="1000"/>-->
<!--</template>-->
<script setup>
import { ref } from 'vue'
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>
<template>
<div class="demo-pagination-block">
<el-pagination
    class="el-p"
    v-model:current-page="currentPage4"
    v-model:page-size="pageSize4"
    :page-sizes="[100, 200, 300, 400]"
    :size="size"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
/>
</div>
</template>
<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
.el-p{
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>