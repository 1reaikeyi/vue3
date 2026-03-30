<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const tableData = [
  {
    title: '标题1',
    catagory: '时事',
    time: '2018-05-01 00:00:00',
    state: '已发布'
  },
  {
    title: '标题2',
    catagory: '军事',
    time: '2018-05-01 00:00:00',
    state: '已发布'
  },
  {
    title:'标题3',
    catagory: '政治',
    time: '2018-05-01 00:00:00',
    state: '已发布'
  },

]
</script>
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="title" label="文章标题"  />
    <el-table-column prop="catagory" label="分类" />
    <el-table-column prop="time" label="发表时间" />
    <el-table-column prop="state" label="状态" />
    <el-table-column label="操作" width="180" >
      <div class="button-row">
        <el-button type="primary" :icon="Edit" circle />
        <el-button type="danger" :icon="Delete" circle />
      </div>
    </el-table-column>
  </el-table>
</template>

