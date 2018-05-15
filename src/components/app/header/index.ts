import { Component, mixins, BaseMixin } from '@/baseExport';

import TheHeaderUser from './user/TheHeaderUser.vue';
import TheHeaderMessage from './message/TheHeaderMessage.vue';

@Component({
  components: {
    TheHeaderUser,
    TheHeaderMessage,
  },
})
export default class TheHeader extends mixins(BaseMixin) {
  // 点击折叠按钮的 icon 样式
  get triggerClass () {
    return this.state.header.isCollapse ? 'menufold' : 'menuunfold';
  }

  // 折叠菜单
  clickCollapse () {
    this.$store.commit('ToggleMenu');
  }
}
