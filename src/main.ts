/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| vue 配置
|
*/

'use strict'

// vue 模块
import Vue from 'vue'
import App from './app'

// 引入 element-ui 模块跟样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入懒加载组件
import VueLazyComponent from '@xunlei/vue-lazy-component'

// 路由文件
import router from './router'

// 全局状态
import store from './store'

// 封装的 axios
import request from './api'

// 将 axios 模块挂载到全局
Vue.prototype.$http = request

// 应用
Vue.use(ElementUI, { size: 'small' })
Vue.use(VueLazyComponent)

// 来关闭生产模式下给出的提示
Vue.config.productionTip = false

// 创建 vue 实例并挂载在 id = app 上
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// 启用调试构建
Vue.config.devtools = true

console.log('\n %c atzcl0310@gmail.com %c https://www.zcloop.com \n\n', 'color: #fff; background: #1abc9c; padding:5px 0;border-radius: 5px 0 0 5px;', 'color: #34495e;background: #edeef0; padding:5px 0;border-radius: 0 5px 5px 0')
