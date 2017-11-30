/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 微信 模块路由
|
*/

'use strict'

const main = () => import('views/Main.ts')

const lazyLoading = name => () => import(`modules/${name}.ts`)

const wechat = [
  {
    path: '/wechat',
    meta: { title: '微信模块' },
    component: main,
    children: [
      { path: '/', meta: { title: '微信模块' }, component: lazyLoading('WeChatModules'), children: [] }
    ]
  }
]

export default wechat
