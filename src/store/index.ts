/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| vuex
|
*/

'use strict';

import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import VuexConnector from '@xunlei/vuex-connector';

// 导入全局状态应用模块
import header from './modules/header';
import user from './modules/user';

// 应用 Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  // 导入状态模块
  modules: {
    header,
    user,
  },
});

// 将 store 传入 connecor 进行连接
export const connector = new VuexConnector(store);

export default store;
