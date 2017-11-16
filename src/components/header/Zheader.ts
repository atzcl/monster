'use strict'

import { mapGetters } from 'vuex'
import { Component, Vue, Watch } from 'vue-property-decorator'

import './Zheader.styl'
import * as Template from './Zheader.html'

import TagsPage from 'components/tags_page/TagsPage'

@Template
@Component({
  computed: {
    ...mapGetters(['isError404']),
    // 获取菜单状态
    MenuCollapse () {
      return this.isError404
    }
  },
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
  // 收缩样式
  conStyle: string = 'padding-left: 200px;'
  rightStyle: string = 'right: 200px;'

  @Watch('isError404')
  getIsError (newVal, oldVal) {
    // 处理 404 的时候，左侧空白
    this.conStyle = 'padding-left: 0px;'
    this.rightStyle = 'right: 0;'
  }

  // 折叠菜单
  clickCollapse () {
    // icon 切换
    this.isColl = !this.isColl
    this.conStyle = this.isColl === true ? 'padding-left: 200px;' : 'padding-left: 64px;'
    this.rightStyle = this.isColl === true ? 'right: 200px;' : 'right: 64px;'
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
