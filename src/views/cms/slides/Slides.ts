'use strict'

import { Component, Vue } from 'vue-property-decorator'

import * as Template from './Slides.html'

import Tables from 'components/tables/Tables'

// 定义复杂模板数据 [动态组件]
const PrefixPlusText = {
  props: ['setColumn'],
  template: `
  <el-table-column :label="setColumn.label">
    <span slot-scope="{ row }">
      {{ parseInt(row[setColumn.prop]) > 0 ? '+' + row[setColumn.prop] : row[setColumn.prop] }}
    </span>
  </el-table-column>
  `
}

@Template
@Component({
  components: {
    Tables
  }
})
export default class CMSSlides extends Vue {
  setColumns = [
    { prop: 'date', label: '日期' },
    { prop: 'name', label: '姓名' },
    { prop: 'address', label: '地址' },
    { prop: 'change', label: '变化', component: PrefixPlusText },
    { prop: 'trend', label: '趋势', component: PrefixPlusText },
    { slot: 'opt' }
  ]

  tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    change: '10%',
    trend: '12%'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
    change: '-10%',
    trend: '-12%'
  }]
}
