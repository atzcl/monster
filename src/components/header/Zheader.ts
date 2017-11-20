'use strict'

import { Component, Vue } from 'vue-property-decorator'

import './Zheader.styl'
import * as Template from './Zheader.html'

import TagsPage from 'components/tags_page/TagsPage'

@Template
@Component({
  components: {
    TagsPage
  }
})
export default class Zheader extends Vue {
  // 是否点击折叠菜单
  isColl: boolean = true
  // 下拉菜单的 icon
  dropdownICON: string = 'el-icon--right'
  // 消息 tabs
  activeName: string = 'notify'
  // tabs 的 loading
  messageLoading: boolean = false
  // 折叠菜单的样式
  conStyle: string = 'padding-left: 200px;'

  // 折叠菜单
  clickCollapse () {
    // icon 切换
    this.isColl = !this.isColl
    this.conStyle = this.isColl === true ? 'padding-left: 200px;' : 'padding-left: 64px;'
    this.$emit('clickCollapse')
  }

  // 监听下拉菜单
  visibleChange (val) {
    this.dropdownICON = val === true ? 'el-icon-arrow-up' : 'el-icon--right'
  }

  // 监听消息 tabs
  messageTabsChange (val) {
    this.messageLoading = true

    setTimeout(() => {
      this.messageLoading = !val
    }, 1000)
  }
}
