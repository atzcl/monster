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
  isCollapse: false,
  cachePage: []
}

// 设置 getters，getters是对state的扩展，可以以state衍生出其他状态
const getters = {
  isCollapse: state => state.isCollapse,
  cachePage: state => state.cachePage
}

// 设置 mutations，用于操作改变 state，mutations 是同步执行的
const mutations = {
  ToggleMenu (state) {
    state.isCollapse = !state.isCollapse
  },
  // 初始读取 tags 菜单缓存
  initCachepage (state) {
    // 利用 localStorage 来做 vuex 状态数据持久化
    if (localStorage.cachePage) {
      state.cachePage = JSON.parse(localStorage.cachePage)
    }
  },
  // 增加 tags 的菜单
  addCachePage (state, obj) {
    // 判断是否已存在
    let isTure = 0
    if (state.cachePage.length > 0) {
      for (let i = 0, len = state.cachePage.length; i < len; i++) {
        // 暂时是利用 path 路径跟 name 别名做判断条件
        if (state.cachePage[i].path === obj.path && state.cachePage[i].name === obj.name) {
          isTure = 1
          break
        }
      }
    }

    // 如果不存在
    if (isTure === 0) {
      state.cachePage.push(obj)
      // 覆盖缓存
      localStorage.cachePage = JSON.stringify(state.cachePage)
    }
  },
  // 删除 tags 的菜单
  closePage (state, obj) {
    state.cachePage.forEach((item, index) => {
      if (item.name === obj.name && item.path === obj.name) {
        state.cachePage.splice(index, 1)
      }
    })

    // 覆盖缓存
    localStorage.cachePage = JSON.stringify(state.cachePage)
  },
  // 利用索引删除 tags 菜单
  removePage (state, index: number) {
    state.cachePage.splice(index, 1)
    localStorage.cachePage = JSON.stringify(state.cachePage)
  }

}

// 设置 actions ，用于执行异步操作的，操作完毕后触发 mutations 里的方法去改变 state 的状态 [用于组合多个 mutations]
const actions = {
  ToggleMenu ({ commit }) {
    // 调用 mutations 的 ZCL_VUEX_MENU
    commit('ZCL_VUEX_MENU')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
