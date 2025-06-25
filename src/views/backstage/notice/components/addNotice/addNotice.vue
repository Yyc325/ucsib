<template>
  <el-drawer :title="t(`operator.${drawerObj.command}`)" v-model="drawerObj.isShow" size="76.4%">
    <div class="add-notice">
      <div class="add-notice-body">
        <el-form :model="noticeForm" :rules="noticeRules" label-position="top">
          <el-form-item :label="t(`backstage.Notice.popup.cover`)" prop="cover" required label-position="left" class="label-left-center">
            <el-upload
              class="avatar-uploader"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="noticeForm.cover" :src="noticeForm.cover" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
          <div class="tip">
            <span class="tip-text">{{t(`backstage.Notice.popup.uploadTip`)}}</span>
          </div>
          <el-form-item :label="t('backstage.Notice.table.title')" prop="title" required>
            <div class="i-form-item__inner">
              <el-input type="textarea" v-model="noticeForm.title" :rows="4" resize="none" show-word-limit maxlength="20"></el-input>
            </div>
          </el-form-item>
          <el-form-item :label="t('backstage.Notice.table.subtitle')" prop="subtitle">
            <div class="i-form-item__inner">
              <el-input type="textarea" v-model="noticeForm.subtitle" :rows="4" resize="none" show-word-limit maxlength="20"></el-input>
            </div>
          </el-form-item>
          <el-form-item :label="t('backstage.Notice.table.content')" prop="content">
            <div class="i-article-editor">
              <ArticleEditor></ArticleEditor>
            </div>
          </el-form-item>
        </el-form>
      </div>
      <div class="add-notice-footer">
        <el-button type="primary">{{ t('operator.saveAndCreate') }}</el-button>
        <el-button type="primary">{{ t('operator.submit') }}</el-button>
        <el-button>{{ t('operator.cancel') }}</el-button>
      </div>
    </div>
  </el-drawer>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'
import {useI18n} from "vue-i18n";
import ArticleEditor from "@/components/IEditor/articleEditor/articleEditor.vue";

export default defineComponent({
  name: "AddNotice",
  components: {
    ArticleEditor,
    Plus,
    ElMessage
  },
  props: {},
  setup(props, {emit,expose}) {
    const {t} = useI18n()
    const state = reactive({
      drawerObj: {
        isShow: false,
        command: "add"
      },
      noticeForm:{
        cover:"",
        title:'',
        subtitle:'',
      },
      noticeRules: {
        title:[{
          message:t('backstage.Notice.popup.required.title'),
          required: true,
          trigger:"blur",

        }]
      }
    })

    const openDialog = () => {
      state.drawerObj.isShow = true
    }

    const handleAvatarSuccess: UploadProps['onSuccess'] = (
      response,
      uploadFile
    ) => {
      state.noticeForm.cover = URL.createObjectURL(uploadFile.raw!)
    }

    const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
      if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
      } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
      }
      return true
    }
    expose({
      openDialog
    })
    return {
      t,
      ...toRefs(state),
      handleAvatarSuccess,
      beforeAvatarUpload
    }
  }
})
</script>

<style scoped lang="scss">
@forward "addNotice";
</style>