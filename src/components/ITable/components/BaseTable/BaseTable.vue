<template>
  <el-table
    class="base-table"
    :data="props.tableData"
    style="width: 100%"
    header-cell-class-name="base-table-header"
    :height="props.height"
    @selection-change="emit('selectChange', $event)"
  >
    <TableColumn
      v-for="(column, index) in props.tableColumns"
      :key="index"
      v-bind="column"
    >
    </TableColumn>
  </el-table>
</template>

<script lang="ts" setup>
import TableColumn from '../TableColumn/TableColumn'

const props = defineProps({
  tableData: {
    type: Array<any>,
    default: () => []
  },
  tableColumns: {
    type: Array<any>,
    default: () => []
  },
  height: {
    type: Number
  }
})

const emit = defineEmits(['selectChange', 'selectionChange'])
</script>
<style scoped lang="scss">
@import './BaseTable.scss';
</style>
