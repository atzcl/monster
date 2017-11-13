/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| CMS 模块路由【默认打开模块】
|
*/

'use strict'

// 加载模块文件
const lazyLoading = name => () => import(`modules/${name}.ts`)
// 加载组件
const lazyLoadingChildren = name => () => import(`cms/${name}.ts`)

const cms = [
  {
    path: '/',
    meta: { title: 'CMS 模块' },
    component: lazyLoading('CmsModules'),
    children: [
      {
        path: '/',
        name: 'cms.index',
        meta: { title: 'CMS 模块' },
        component: lazyLoadingChildren('index/Index')
      },
      {
        path: 'config',
        name: 'cms.config',
        meta: { title: '网站设置' },
        component: lazyLoadingChildren('config/Config')
      }
    ]
  }
]

export default cms
