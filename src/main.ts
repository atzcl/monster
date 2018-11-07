/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: atzcl <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| vue 配置、实例
|
*/

import Vue from 'vue';
import App from './App.vue';

// 创建自定义全局变量，用于挂载相关数据，避免命名污染
// window.GLOBAL = {
//   vbus: new Vue(), // 创建事件总线
// };

// 注入 css 文件
import './config/css';

// PWA
import '@/registerServiceWorker';

// 路由文件
import router from './routes';

// 全局状态
import store from './store';

// 过滤器集合
import filters from './utils/filters';

// 挂载到 vue 原型上的方法、类等
import inject from './config/inject';

// 引入 element-ui 模块
import ELEMENT from 'element-ui';
// 引入懒加载组件
import VueLazyComponent from '@xunlei/vue-lazy-component';
// 基础 icon
import Zicon from 'components_alias/base/icon/index';

// 应用
Vue.use(ELEMENT, { size: 'small' });
Vue.use(VueLazyComponent);
Vue.use(Zicon);
Vue.use(inject);

// 挂载多个过滤器到全局
Object.keys(filters).forEach((attrName: string) => {
  Vue.filter(attrName, (filters as any)[attrName]);
});

// 来关闭生产模式下给出的提示
Vue.config.productionTip = false;
// 启用调试构建
Vue.config.devtools = true;

export const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// 将 vue、vuex 挂载到全局
window.vueApp = app;

console.log('\n %c atzcl0310@gmail.com %c https://www.atzcl.cn \n', 'color: #fff; background: #1abc9c; padding: 5px 0;border-radius: 5px 0 0 5px;', 'color: #333; background: #edeef0; padding: 5px 0; border-radius: 0 5px 5px 0');
