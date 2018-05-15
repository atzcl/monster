import { Component, Prop, BaseMixin, mixins } from '@/baseExport';

@Component
export default class TheMenu extends mixins(BaseMixin) {
  // 菜单数组
  @Prop({ type: Array })
  menuArray: TheMenu[];

  // Loading
  @Prop({ type: Boolean, default: false })
  isLoading: boolean;

  get isCollapse () {
    return this.state.header.isCollapse;
  }
}
