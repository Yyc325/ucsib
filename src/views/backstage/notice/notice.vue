<template>
  <ISkeleton>
    <template #body>
      <div class="notice">
        <div class="notice-container">
          <div class="notice-search">
            <div class="notice-search-input">
              <div class="notice-search-btn">
                <el-button @click="createNotice">{{ t('operator.add') }}</el-button>
                <el-button @click="publishNotice">{{ t('operator.publish') }}</el-button>
                <el-dropdown>
                  <el-button>{{ t('operator.edit') }}
                    <el-icon class="el-icon--right">
                      <arrow-down/>
                    </el-icon>
                  </el-button>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="editNotice">{{ t('operator.edit') }}</el-dropdown-item>
                      <el-dropdown-item @click="deleteNotice">{{ t('operator.delete') }}</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
              <el-input v-model="queryParams.userName" :placeholder="t('tip.userName')"></el-input>
              <el-input v-model="queryParams.phone" :placeholder="t('tip.phone')"></el-input>
            </div>
            <div class="notice-search-btn">
              <el-button type="primary" @click="loadData">{{ $t('buttonText.search') }}</el-button>
            </div>
          </div>
          <div class="notice-table">
            <ITable :tableData="tableData" :tableColumns="tableColumns" :total="total"
                    @size-change="handleSizeChange" @current-change="handleCurrentChange" :is-paging="false"/>
          </div>
        </div>
        <add-notice ref="addNoticeRef"></add-notice>
      </div>

    </template>
  </ISkeleton>
</template>
<script lang="ts">
import {defineComponent, h, onMounted, reactive, ref, toRefs} from "vue";
import ISkeleton from "@/components/ISkeleton/ISkeleton.vue";
import ITable from "@/components/ITable/ITable.vue";
import {useI18n} from "vue-i18n";
import {ArrowDown} from "@element-plus/icons-vue";
import AddNotice from "@/views/backstage/notice/components/addNotice/addNotice.vue";
import {ElMessageBox} from "element-plus";

export default defineComponent({
  name: 'notice',
  components: {
    AddNotice,
    ArrowDown,
    ITable,
    ISkeleton
  },
  setup() {
    const {t} = useI18n();

    const addNoticeRef = ref()

    const state = reactive({
      queryParams: {
        userName: '',
        phone: "",
        pageName: 1,
        pageSize: 10
      },
      tableData: [],
      tableColumns: [
        {
          type: 'selection',
        },
        {
          label: t('backstage.Notice.table.title'),
          minWidth: '140',
          prop: 'user_name',
          render: (row: any) => {
            return row.user_name
          }
        },
        {
          label: t('backstage.Notice.table.subtitle'),
          minWidth: '140',
          prop: 'real_name',
          render: (row: any) => {
            return row.real_name
          }
        },
        {
          label: t('backstage.Notice.table.content'),
          prop: 'identity',
          width: '160',
          render: (row: any) => {
            return "111"
          }
        },
        {
          label: t('backstage.Notice.table.publisher'),
          minWidth: '140',
          prop: 'phone',
          render: (row: any) => {
            return row.phone
          }
        },
        {
          label: t('backstage.Notice.table.status'),
          minWidth: '140',
          prop: 'phone',
          render: (row: any) => {
            return row.phone
          }
        },
        {
          label: t('backstage.Notice.table.publishTime'),
          minWidth: '140',
          prop: 'phone',
          render: (row: any) => {
            return row.phone
          }
        },
        {
          label: t('backstage.Notice.table.createTime'),
          minWidth: '140',
          prop: 'phone',
          render: (row: any) => {
            return row.phone
          }
        },
      ],
      total: 0,
    })
    // 请求数据
    const loadData = () => {
      // get_all_users({
      //   phone: state.queryParams.phone,
      //   userName: state.queryParams.userName,
      // }).then((res: any) => {
      //   if (res.status === "success") {
      //     state.tableData = res.data
      //     state.total = res.data.length
      //   }
      // })
    }

    // 页数改变
    const handleSizeChange = () => {

    }
    // 当前页改变
    const handleCurrentChange = () => {

    }

    // 新增公告
    const createNotice = () => {
      addNoticeRef.value.openDialog()
    }

    // 编辑公告
    const editNotice = () => {
      addNoticeRef.value.openDialog()
    }

    // 发布公告
    const publishNotice = () => {
      addNoticeRef.value.openDialog()
    }

    // 发布公告
    const deleteNotice = () => {
      ElMessageBox({
        boxType:"confirm",
        title:t('backstage.Notice.popup.tip.delete.title'),
        message:t('backstage.Notice.popup.tip.delete.description'),
        confirmButtonText:t('operator.confirm'),
        cancelButtonText:t('operator.cancel'),
      }).then(() => {

      })
    }

    onMounted(() => {
      loadData()
    })
    return {
      t,
      addNoticeRef,
      ...toRefs(state),
      createNotice,
      loadData,
      handleSizeChange,
      handleCurrentChange,
      editNotice,
      publishNotice,
      deleteNotice,
    }
  }
})
</script>


<style scoped lang="scss">
@use "notice";
</style>