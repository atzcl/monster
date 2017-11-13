/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| vuex 全局状态
|
*/

'use strict'

// 设置state
const state = {
  // 是否折叠菜单
  isCollapse: false
}

// 设置 getters，getters是对state的扩展，可以以state衍生出其他状态
const getters = {
  isCollapse: state => state.isCollapse
}

// 设置 mutations，用于操作改变 state，mutations 是同步执行的
const mutations = {
  ZCL__VUEX_MENU: state => {
    state.isCollapse = !state.isCollapse
  }
}

// 设置 actions ，用于执行异步操作的，操作完毕后触发 mutations 里的方法去改变 state 的状态
const actions = {
  ToggleMenu ({ commit }) {
    // 调用 mutations 的 ZCL__VUEX_MENU
    commit('ZCL__VUEX_MENU')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
