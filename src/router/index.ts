/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 路由配置
|
*/

'use strict'

import Vue from 'vue'
import Router from 'vue-router'

// 导入路由文件
import cms from './cms'
import mall from './mall'
import error from './error'
import wechat from './wechat'

// 引入进度条模块跟样式
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 默认标题
const title = 'Web 管理系统'

// 应用路由
Vue.use(Router)

// 创建路由实例
const router = new Router({
  base: '/app/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: cms.concat(wechat, mall, error)
})

// 路由全局前置守卫
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start()

  let titleStr = ''
  for (let i = to.matched.length - 1; i >= 0; i--) {
    titleStr = `${to.matched[i].meta.title} - `
  }

  titleStr += title
  document.title = titleStr
  next()
})

router.afterEach(transition => {
  // 关闭进度条
  NProgress.done()
})

export default router
