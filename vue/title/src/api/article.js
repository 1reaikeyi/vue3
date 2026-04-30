import request from '@/utils/request'

// 分类：获取分类列表
export const categoryGetListService = () =>
    request.get('/category')

// 分类：获取分类详情
export const categoryGetIdService = (id) =>
    request.get(`/category/${id}`)

// 分类：添加分类
export const categoryAddService = (data) =>
    request.post('/category', data)

// 分类：编辑分类
export const categoryEditService = (data) =>
    request.put('/category', data)

// 分类：删除分类
export const categoryDelService = (id) =>
    request.delete(`/category/${id}`)

// 文章：获取文章列表
export const artGetListService = () =>
  request.get('/article/list')

// 文章：获取分页文章列表
export const artGetPageService = (params) =>
  request.get('/article', { params })

// 文章：获取文章详情
export const artGetIdService = (id) =>
  request.get(`/article/${id}`)

// 文章：添加文章
export const artPublishService = (data) =>
  request.post('/article', data)

// 文章：编辑文章
export const artEditService = (data) =>
  request.put('/article', data)

// 文章：删除文章
export const artDelService = (id) =>
  request.delete(`/article/${id}`)


