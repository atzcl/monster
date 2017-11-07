/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| vuex
|
*/

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

// 导入全局状态应用模块
import status from './modules/status'

// 应用 Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  // 导入状态模块
  modules: {
    status
  }
})
