<template>
	<ISkeleton>
		<template #body>
			<div class="user-management-container">
				<div class="user-management-search">
					<div class="user-management-search-input">
						<el-input v-model="queryParams.userName" :placeholder="t('tip.userName')"></el-input>
						<el-input v-model="queryParams.phone" :placeholder="t('tip.phone')"></el-input>
					</div>
					<div class="user-management-search-btn">
						<el-button type="primary" @click="loadData">搜索</el-button>
					</div>
				</div>
				<div class="user-management-table">
					<ITable :tableData="tableData" :tableColumns="tableColumns" :total="total"
						@size-change="handleSizeChange" @current-change="handleCurrentChange" :is-paging="false" />
				</div>
			</div>
		</template>
	</ISkeleton>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import ISkeleton from '@/components/ISkeleton/ISkeleton.vue';
import ITable from '@/components/ITable/ITable.vue';
import { get_all_users } from '@/apis/backstage';
import { useI18n } from 'vue-i18n';
export default defineComponent({
	name: 'UserManagement',
	components: {
		ISkeleton,
		ITable
	},
	props: {

	},
	setup() {
		const { t } = useI18n();
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
					label: '用户名',
					minWidth: '140',
					prop: 'user_name',
					render: (row: any) => {
						return row.user_name
					}
				},
				{
					label: '真实姓名',
					minWidth: '140',
					prop: 'real_name',
					render: (row: any) => {
						return row.real_name
					}
				},
				{
					label: '手机号',
					minWidth: '140',
					prop: 'phone',
					render: (row: any) => {
						return row.phone
					}
				},
				// {
				// 	label: '创建时间',
				// 	minWidth: '140',
				// 	prop: 'createTime',
				// 	render: (row: any) => {
				// 		return row.createTime
				// 	}
				// }
			],
			total: 0,
		})
		// 请求数据
		const loadData = () => {
			get_all_users({
				phone: state.queryParams.phone,
				userName: state.queryParams.userName,
			}).then((res: any) => {
				if (res.status === "success") {
					state.tableData = res.data
					state.total = res.data.length
				}
			})
		}

		// 页数改变
		const handleSizeChange = () => {

		}
		// 当前页改变
		const handleCurrentChange = () => {

		}

		onMounted(() => {
			loadData()
		})
		return {
			t,
			...toRefs(state),
			loadData,
			handleSizeChange,
			handleCurrentChange
		}
	}
});
</script>

<style lang="scss" scoped>
@import './userManagement.scss';
</style>