
import { Component, mixins, BaseMixin } from '@/baseExport';

@Component
export default class TheHeaderUser extends mixins(BaseMixin) {
  // 下拉菜单的 icon
  dropdownICON: string = 'el-icon--right';

  // 功能列表
  features: any[] = [
    { name: '超级管理员', icon: 'qxgl', func: '', style: '', class: 'main-color' },
    { name: '个人中心', icon: 'xitong', func: '', style: '', class: '' },
    { name: '退出登录', icon: 'off', func: '', style: '', class: 'main-color-red' },
  ];

  // 监听下拉菜单
  visibleChange (val: boolean) {
    this.dropdownICON = val === true ? 'el-icon-arrow-up' : 'el-icon--right';
  }

  get userInfo () {
    return this.state.user.userInfo;
  }
}
