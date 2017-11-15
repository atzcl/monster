'use strict'

import { Component, Vue } from 'vue-property-decorator'

import './Zheader.styl'
import * as Template from './Zheader.html'

@Template
@Component
export default class Zheader extends Vue {
  // 是否点击折叠菜单
  isColl: boolean = true

  // 下拉菜单的 icon
  dropdownICON: string = 'el-icon--right'

  // 消息 tabs
  activeName:string = 'notify'

  // tabs 的 loading
  messageLoading: boolean = false

  // 折叠菜单
  clickCollapse () {
    // icon 切换
    this.isColl = !this.isColl
    this.$emit('clickCollapse')
  }

  // 监听下拉菜单
  visibleChange (val) {
    this.dropdownICON = val === true ? 'el-icon-arrow-up' : 'el-icon--right'
  }
}
