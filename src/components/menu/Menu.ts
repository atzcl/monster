'use strict'

import { mapGetters } from 'vuex'
import { Component, Prop, Vue } from 'vue-property-decorator'

import './menu.styl'
import * as Template from './Menu.html'

@Template
@Component({
  computed: {
    ...mapGetters(['isCollapse']),
    // 获取菜单状态
    MenuCollapse () {
      return this.isCollapse
    }
  }
})
export default class Menu extends Vue {
  // 菜单数组
  @Prop({ type: Array })
  menuArray: Array<Menu>

  // Loading
  @Prop({ type: Boolean, default: false })
  isLoading
}
