'use strict'

import { Component, Vue } from 'vue-property-decorator'

import * as Template from './Main.html'

import ZHeader from 'components/header/Zheader'

@Template
@Component({
  components: {
    ZHeader
  }
})
export default class Main extends Vue {
  // methods 方法
  clickCollapse () {
    // 变动菜单状态
    this.$store.commit('ToggleMenu')
  }
}
