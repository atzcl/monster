<template>
  <el-row>
    <!-- 数据统计 -->
    <el-card>
      <statistics :data="statisticsData" />
    </el-card>

    <el-card class="pv-map">
      <div class="region-pv">
        <h3>访问城市 PV Top 10</h3>
        <el-table
          :data="tableData"
          height="360"
          border
        >
          <el-table-column
            :prop="item.attrs"
            :label="item.label"
            :width="item.width"
            v-for="(item, index) in tableColumns"
            :key="index"
          />
        </el-table>
      </div>

      <skeleton class="pv-echart">
        <ve-histogram
          slot="body"
          :data="mapData"
          :settings="mapSettings"
        />
      </skeleton>
    </el-card>

    <!-- pv 折线 -->
    <el-card class="line-echart">
      <skeleton>
        <ve-line
          slot="body"
          :grid="grid"
          :data="chartData"
          :settings="chartSettings"
          :colors="colors"
        />
      </skeleton>
    </el-card>

  </el-row>
</template>

<script lang="ts">
  import vm from './index';
  export default vm;
</script>

<style lang="stylus" scoped>
.line-echart
  width 100%
  height: 400px;


.pv-map
  height: 400px;
  padding-top: 20px;
  width: 100%;
  display: flex;

  /deep/ .el-card__body
    display: flex !important

  .region-pv
    width: 400px;
    margin-top: -10px;
    margin-left: 20px;

    h3
      margin-bottom: 15px;

  .pv-echart
    width: calc(100% - 550px);
    height 100%
    margin-left: 110px
</style>
