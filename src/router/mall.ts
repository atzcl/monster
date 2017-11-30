/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 商城 模块路由
|
*/

'use strict'

const main = () => import('views/Main.ts')

const lazyLoading = name => () => import(`modules/${name}.ts`)

const mall = [
  {
    path: '/mall',
    meta: { title: '商城模块' },
    component: main,
    children: [
      { path: '/', meta: { title: '商城模块' }, component: lazyLoading('MallModules'), children: [] }
    ]
  }
]

export default mall
