'use strict'

import { Component, Vue, Prop } from 'vue-property-decorator'

import * as Template from './Tables.html'

@Template
@Component
export default class Tables extends Vue {
  @Prop({ type: Array, default: [] })
  setColumn: Array<Tables>

  @Prop({ type: Array, default: [] })
  tableData: Array<Tables>

  // 处理事件单击
  handleCellClick (row, column, cell, event) {
    console.log(row)
  }
}
