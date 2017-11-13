'use strict'

import { Component, Vue } from 'vue-property-decorator'

import './Zheader.styl'
import * as Template from './Zheader.html'

@Template
@Component
export default class Zheader extends Vue {
  isColl: Boolean = true

  // 折叠菜单
  clickCollapse () {
    // icon 切换
    this.isColl = !this.isColl
    this.$emit('clickCollapse')
  }
}
