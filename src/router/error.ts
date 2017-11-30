/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| error 模块路由
|
*/

'use strict'

const lazyLoading = name => () => import(`views/error/${name}.ts`)

const errors = [
  { path: '*', name: '*', meta: { title: '404' }, component: lazyLoading('error_404'), children: [] }
]

export default errors
