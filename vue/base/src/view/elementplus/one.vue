<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside width="220px" class="aside">
      <div class="logo">⚡ 后台管理系统</div>
      <el-menu
          :default-active="activeMenu"
          class="menu"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
      >
        <el-menu-item index="dashboard">
          <el-icon><Odometer /></el-icon>
          <span>仪表盘</span>
        </el-menu-item>
        <el-menu-item index="user">
          <el-icon><User /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="order">
          <el-icon><ShoppingCart /></el-icon>
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="settings">
          <el-icon><Setting /></el-icon>
          <span>系统设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 右侧主要内容区 -->
    <el-container>
      <!-- 顶部导航 -->
      <el-header class="header">
        <div class="header-left">
          <el-icon class="fold-btn"><Fold /></el-icon>
          <span class="breadcrumb">首页 / 仪表盘</span>
        </div>
        <div class="header-right">
          <el-badge :value="3" class="badge-item">
            <el-icon><Bell /></el-icon>
          </el-badge>
          <el-dropdown>
            <span class="user-info">
              <el-avatar :size="32" :src="avatarUrl" />
              <span>Admin</span>
              <el-icon><CaretBottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- 主体内容 -->
      <el-main class="main">
        <!-- 统计卡片行 -->
        <el-row :gutter="20" class="stats-row">
          <el-col :span="6">
            <el-card class="stat-card">
              <div class="stat-content">
                <div class="stat-info">
                  <div class="stat-title">总用户数</div>
                  <div class="stat-number">{{ stats.totalUsers }}</div>
                </div>
                <el-icon class="stat-icon" color="#409EFF"><User /></el-icon>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="stat-card">
              <div class="stat-content">
                <div class="stat-info">
                  <div class="stat-title">总订单数</div>
                  <div class="stat-number">{{ stats.totalOrders }}</div>
                </div>
                <el-icon class="stat-icon" color="#67C23A"><ShoppingCart /></el-icon>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="stat-card">
              <div class="stat-content">
                <div class="stat-info">
                  <div class="stat-title">成交金额</div>
                  <div class="stat-number">¥{{ stats.totalAmount }}</div>
                </div>
                <el-icon class="stat-icon" color="#E6A23C"><Money /></el-icon>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="stat-card">
              <div class="stat-content">
                <div class="stat-info">
                  <div class="stat-title">访问量</div>
                  <div class="stat-number">{{ stats.visits }}</div>
                </div>
                <el-icon class="stat-icon" color="#F56C6C"><View /></el-icon>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 最近用户表格 -->
        <el-card class="table-card">
          <template #header>
            <div class="card-header">
              <span>👥 最近注册用户</span>
              <el-button type="primary" size="small" @click="handleAdd">新增用户</el-button>
            </div>
          </template>
          <el-table :data="userTableData" stripe style="width: 100%">
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="role" label="角色" />
            <el-table-column prop="createTime" label="注册时间" />
            <el-table-column label="操作" width="150">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button link type="danger" size="small" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="[5, 10, 20]"
                :total="totalUsers"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            />
          </div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  Odometer, User, ShoppingCart, Setting, Fold, Bell,
  CaretBottom, Money, View
} from '@element-plus/icons-vue'

// 模拟统计数据
const stats = reactive({
  totalUsers: 12580,
  totalOrders: 3421,
  totalAmount: '986,200',
  visits: 89600
})

// 表格数据
const userTableData = ref([])
const currentPage = ref(1)
const pageSize = ref(5)
const totalUsers = ref(28) // 模拟总数

// 模拟获取用户列表（后端分页）
const fetchUserList = () => {
  // 模拟分页数据
  const allUsers = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', createTime: '2025-03-20' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: '普通用户', createTime: '2025-03-19' },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: 'VIP', createTime: '2025-03-18' },
    { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '普通用户', createTime: '2025-03-17' },
    { id: 5, name: '小明', email: 'xiaoming@example.com', role: '管理员', createTime: '2025-03-16' },
    { id: 6, name: '小红', email: 'xiaohong@example.com', role: '普通用户', createTime: '2025-03-15' },
    { id: 7, name: '小刚', email: 'xiaogang@example.com', role: 'VIP', createTime: '2025-03-14' },
    { id: 8, name: '小丽', email: 'xiaoli@example.com', role: '普通用户', createTime: '2025-03-13' }
  ]
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  userTableData.value = allUsers.slice(start, end)
  totalUsers.value = allUsers.length
}

// 监听分页变化
const handleSizeChange = (val) => {
  pageSize.value = val
  currentPage.value = 1
  fetchUserList()
}
const handleCurrentChange = () => {
  fetchUserList()
}

// 按钮操作模拟
const handleAdd = () => {
  ElMessage.success('打开新增用户弹窗（对接后端接口）')
}
const handleEdit = (row) => {
  ElMessage.info(`编辑用户：${row.name}`)
}
const handleDelete = (row) => {
  ElMessageBox.confirm(`确定删除用户 ${row.name} 吗？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    ElMessage.success('删除成功（模拟）')
    fetchUserList() // 刷新列表
  }).catch(() => {})
}

// 当前激活菜单（仅展示用）
const activeMenu = ref('dashboard')
const avatarUrl = ref('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png')

onMounted(() => {
  fetchUserList()
})
</script>

<style scoped>
.layout-container {
  height: 100vh;
}
.aside {
  background-color: #304156;
}
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #2b3a4e;
  border-bottom: 1px solid #1f2d3a;
}
.menu {
  border-right: none;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 20px;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.fold-btn {
  font-size: 20px;
  cursor: pointer;
}
.breadcrumb {
  font-size: 14px;
  color: #666;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.badge-item {
  cursor: pointer;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.main {
  background-color: #f0f2f6;
  padding: 20px;
}
.stats-row {
  margin-bottom: 20px;
}
.stat-card {
  border-radius: 8px;
}
.stat-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stat-info {
  display: flex;
  flex-direction: column;
}
.stat-title {
  font-size: 14px;
  color: #909399;
  margin-bottom: 8px;
}
.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
}
.stat-icon {
  font-size: 40px;
}
.table-card {
  border-radius: 8px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>