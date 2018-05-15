/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| vue 配置、实例
|
*/

'use strict';

import Vue from 'vue';
import App from './App.vue';

// PWA
import './registerServiceWorker';

// 引入 element-ui 模块跟样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入样式
import './assets/css/app.styl';
import './assets/css/face.styl';
import './assets/css/common.styl';

// 引入 v-charts
import VCharts from 'v-charts';

// 引入懒加载组件
import VueLazyComponent from '@xunlei/vue-lazy-component';

// 路由文件
import router from './routes';

// 全局状态
import store from './store';

// 封装的 axios
import request from './request';

// 基础 icon
import Zicon from 'components_alias/base/icon/index';

// 将 axios 模块挂载到 Vue 原型属性上
Vue.prototype.$http = request;

// 应用
Vue.use(ElementUI, { size: 'small' });
Vue.use(VueLazyComponent);
Vue.use(VCharts);
Vue.use(Zicon);

// 关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// 启用调试构建
Vue.config.devtools = true;

console.log('\n %c atzcl0310@gmail.com %c https://www.atzcl.cn \n', 'color: #fff; background: #1abc9c; padding: 5px 0;border-radius: 5px 0 0 5px;', 'color: #333; background: #edeef0; padding: 5px 0; border-radius: 0 5px 5px 0');
