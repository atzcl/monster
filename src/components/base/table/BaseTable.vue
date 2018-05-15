<template>
  <el-table
    v-loading.lock="loading"
    ref="table"
    :data="tableData"
    :border="border"
    :stripe="stripe"
    :height="height"
    :max-height="maxHeight"
    :fit="fit"
    :show-header="showHeader"
    :style="styles"
    :empty-text="emptyText"
    :default-sort="defaultSort"
    @select="(selection, row) => emitEventHandler('select', selection, row)"
    @select-all="selection => emitEventHandler('select-all', selection)"
    @selection-change="selection => emitEventHandler('selection-change', selection)"
    @sort-change="args => emitEventHandler('sort-change', args)"
    @filter-change="filters => emitEventHandler('filter-change', filters)"
    @expand-change="(row, expanded) => emitEventHandler('expand-change', row, expanded)"
  >

  <!-- 前置插槽 -->
  <slot name="prepend" />

  <el-table-column
    v-for="(column, columnIndex) in columns" :key="`base-table-${columnIndex}`"
    :prop="column.prop"
    :label="column.label"
    :width="column.minWidth ? '' : (column.width || '')"
    :minWidth="column.minWidth || column.width || ''"
    :fixed="column.fixed"
    :render-header="column.renderHeader"
    :sortable="column.sortable"
    :sort-method="column.sortMethod"
    :formatter="column.formatter"
    :show-overflow-tooltip="column.showOverflowTooltip || true"
    :align="column.align || 'center'"
    :header-align="column.headerAlign || column.align"
    :class-name="column.className"
    :label-class-name="column.labelClassName"
    :selectable="column.selectable"
    :reserve-selection="column.reserveSelection"
    :filters="column.filters"
    :filter-placement="column.filterPlacement"
    :filter-multiple="column.filterMultiple"
    :filter-method="column.filterMethod"
    :filtered-value="column.filteredValue"
  >

    <template slot-scope="scope" :scope="newSlotScope ? 'scope' : false ">
      <template v-if="column.slotName">
        <!-- 如果该 column 传入了 slot 插槽名称, 那么就应用相应的 slot  -->
        <slot :name="column.slotName" :row="scope.row" :$index="scope.$index" />
      </template>

      <!-- 默认情况 -->
      <template v-else>
        <!-- 如果有传入 render, 那就执行 vue 的 render 函数进行渲染 -->
        <render
          v-if="column.render"
          :row="scope.row"
          :column="column"
          :index="scope.$index"
          :render="column.render"
        />

        <!-- 默认显示值 -->
        <template v-else>
          {{ scope.row[column.prop] }}
        </template>
        
      </template>
    </template>

  </el-table-column>

  <!-- 后置插槽 -->
  <slot name="append" />

  </el-table>
</template>

<script lang="ts">
  import vm from './index';
  export default vm;
</script>

<style lang="stylus" scoped>
</style>
