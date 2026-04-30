<script setup>
import { ref, onMounted } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { artPublishService, artGetIdService, artEditService, categoryGetListService } from '@/api/article.js'
import { ElMessage } from 'element-plus'

const visibleDrawer = ref(false)
const categoryList = ref([])

const defaultForm = {
  title: '',
  categoryId: '',
  coverImg: '',
  content: '',
  state: ''
}

const formModel = ref({ ...defaultForm })

const imgUrl = ref('')
const onSelectFile = (uploadFile) => {
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.coverImg = uploadFile.raw
}

const emit = defineEmits(['success'])
const onPublish = async (state) => {
  formModel.value.state = state

  const fd = new FormData()
  for (let key in formModel.value) {
    fd.append(key, formModel.value[key])
  }

  if (formModel.value.id) {
    await artEditService(fd)
    ElMessage.success('修改成功')
  } else {
    await artPublishService(fd)
    ElMessage.success('添加成功')
  }
  visibleDrawer.value = false
  emit('success')
}

const editorRef = ref()
const open = async (row) => {
  visibleDrawer.value = true
  await getCategoryList()

  if (row.id) {
    const res = await artGetIdService(row.id)
    formModel.value = res.data
    imgUrl.value = formModel.value.coverImg || ''
  } else {
    formModel.value = { ...defaultForm }
    imgUrl.value = ''
    if (editorRef.value) {
      editorRef.value.setHTML('')
    }
  }
}

const getCategoryList = async () => {
  const res = await categoryGetListService()
  categoryList.value = res.data
}

defineExpose({ open })
</script>

<template>
  <el-drawer
    v-model="visibleDrawer"
    :title="formModel.id ? '编辑文章' : '添加文章'"
    direction="rtl"
    size="50%"
  >
    <el-form :model="formModel" ref="formRef" label-width="100px">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="formModel.title" placeholder="请输入标题"></el-input>
      </el-form-item>
      <el-form-item label="文章分类" prop="categoryId">
        <el-select v-model="formModel.categoryId" placeholder="请选择分类" style="width: 100%">
          <el-option
            v-for="item in categoryList"
            :key="item.id"
            :label="item.categoryName"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章封面" prop="coverImg">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="onSelectFile"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章内容" prop="content">
        <div class="editor">
          <quill-editor
            ref="editorRef"
            v-model:content="formModel.content"
            content-type="html"
            theme="snow"
          ></quill-editor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">发布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="scss" scoped>
.avatar-uploader {
  :deep {
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .el-upload {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
    }
    .el-upload:hover {
      border-color: var(--el-color-primary);
    }
    .el-icon.avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      text-align: center;
    }
  }
}

.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 200px;
  }
}
</style>
