'use strict'

import Vue from 'vue'
import Component from 'vue-class-component'

import * as Template from './Index.html'
import SkeletonLoading from 'components/skeleton/Loading'

@Template
@Component({
  components: {
    SkeletonLoading
  }
})
export default class CMSIndex extends Vue {
  chartData = {
    columns: ['日期', 'PC端', '移动端'],
    rows: [
      { 日期: '11-13', PC端: 1523, 移动端: 541 },
      { 日期: '11-13', PC端: 1223, 移动端: 965 },
      { 日期: '11-13', PC端: 2123, 移动端: 471 },
      { 日期: '11-13', PC端: 4123, 移动端: 1523 },
      { 日期: '11-13', PC端: 3123, 移动端: 654 },
      { 日期: '11-13', PC端: 7123, 移动端: 88 }
    ]
  }

  colors = ['#6DD8D9', '#BEE6FF']

  chartSettings = {
    stack: { 本周访问设备数据: ['PC端', '移动端'] },
    area: true
  }

  echartMapData = {
    columns: ['位置', 'GDP'],
    rows: [
      { 位置: '吉林', 税收: 123, 人口: 123, 面积: 92134 },
      { 位置: '北京', 税收: 1223, 人口: 2123, 面积: 29234 },
      { 位置: '上海', 税收: 2123, 人口: 1243, 面积: 94234 },
      { 位置: '浙江', 税收: 4123, 人口: 5123, 面积: 29234 }
    ]
  }

  mapSettings = {
    position: 'china',
    dimension: '位置',
    metrics: ['人口', '面积'],
    dataType: {
      面积: 'KMB'
    }
  }

  tableData = [
    {
      name: '佛山',
      value: 1908
    },
    {
      name: '深圳',
      value: 123
    },
    {
      name: '上海',
      value: 516
    },
    {
      name: '杭州',
      value: 12
    },
    {
      name: '广州',
      value: 63
    },
    {
      name: '福州',
      value: 1
    },
    {
      name: '北京',
      value: 16
    },
    {
      name: '齐齐哈尔',
      value: 1
    },
    {
      name: '南京',
      value: 1
    }
  ]

  tableColumns = [
    {
      attrs: 'name',
      label: '城市',
      width: 199,
      align: 'center'
    },
    {
      attrs: 'value',
      label: 'PV',
      width: 194,
      align: 'center'
    }
  ]
}
