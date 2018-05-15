import Icon from './Icon.vue';

// 注册全局组件
const zIcon = {
  install (vue: any) {
    vue.component('z-icon', Icon);
  },
};

// 导出组件
export default zIcon;
