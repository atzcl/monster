'use strict'

import Vue from 'vue'
import Component from 'vue-class-component'
import ZHeader from 'components/header/Zheader'

import * as Template from './app.html'

// 导入样式
import './assets/css/app.styl'
import './assets/css/face.styl'
import './assets/css/common.styl'

@Template
@Component({
  components: {
    ZHeader
  }
})
export default class App extends Vue {
  // methods 方法
  clickCollapse () {
    // 变动菜单状态
    this.$store.dispatch('ToggleMenu')
  }
}