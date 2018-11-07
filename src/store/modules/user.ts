/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| 用户相关
|
*/

import { ActionTree } from 'vuex';

// state 接口定义
export interface State {
  userInfo: {
    username: string,
    nickname: string,
    avatar: string,
  } | any;
}

// 设置state
const state: State = {
  // 用户详情
  userInfo: {
    nickname: 'At zcl',
    avatar: '//store.zcloop.com/static/images/default/logo.png',
  },
};

// 设置 mutations，用于操作改变 state，mutations 是同步执行的
const mutations = {
  //
};

// 设置 actions ，用于执行异步操作的，操作完毕后触发 mutations 里的方法去改变 state 的状态 [用于组合多个 mutations]
const actions: ActionTree<any, any> = {
  //
};

export default {
  state,
  mutations,
  actions,
};
