/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| CMS 模块路由【默认打开模块】
|
*/

import { upperFirst } from 'lodash';

// 加载组件
const lazyLoading = (name: string) => () => {
  // 根据约定，单文件的文件名都是首字母大写
  const upper: string = upperFirst(name);

  return import(`cms_alias/${name}/${upper}.vue`);
};

const cms = [
  {
    path: '/',
    name: 'cms',
    meta: { title: 'Cms Dashboard' },
    component: lazyLoading('dashboard'),
  },
  {
    path: '/configs', name: 'cms.config', meta: { title: '配置' },
    component: lazyLoading('config'),
  },
  {
    path: '/article', name: 'cms.article', meta: { title: '文章列表' },
    component: lazyLoading('article'),
  },
];

export default cms;
