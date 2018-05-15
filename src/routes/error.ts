/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| error 模块路由
|
*/

'use strict';

const lazyLoading = (name: string) => () => import(`views_alias/error/${name}.vue`);

const errors = [
  { path: '*', name: '*', meta: { title: '404' }, component: lazyLoading('Error404') },
];

export default errors;
