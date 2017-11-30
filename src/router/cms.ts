/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| CMS 模块路由【默认打开模块】
|
*/

'use strict'

// 入口
const main = () => import('views/Main')
// 加载模块
const lazyLoading = name => () => import(`modules/${name}.ts`)
// 加载组件
const lazyLoadingChildren = name => () => import(`cms/${name}.ts`)

const cms = [
  {
    path: '/',
    meta: { title: 'Cms Dashboard' },
    component: main,
    children: [
      {
        path: '/',
        meta: { title: 'Cms Dashboard' },
        component: lazyLoading('CmsModules'),
        children: [
          { path: '/', name: 'cms.index', meta: { title: 'Cms Dashboard' }, component: lazyLoadingChildren('index/Index') },
          { path: 'config', name: 'cms.config', meta: { title: '网站设置' }, component: lazyLoadingChildren('config/Config') },
          { path: 'email', name: 'cms.email', meta: { title: '邮件设置' }, component: lazyLoadingChildren('email/Email') },
          { path: 'slides', name: 'cms.slides', meta: { title: '轮播管理' }, component: lazyLoadingChildren('slides/Slides') }
        ]
      }
    ]
  }
]

export default cms
