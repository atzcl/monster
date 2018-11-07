/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| axios 封装出口
|
*/

import axios from 'axios';
import config from './config';
import store from '../store';
import BaseHttp from './http';
import HandlerExceptions from './handlerExceptions';

// 超时
axios.defaults.timeout = 10000;
// 基础 url
// axios.defaults.baseURL = '/v1/admin';

// 请求拦截器
axios.interceptors.request.use((conf: object) => {
  // 判断 token 是否存在
  // if (store.state.user.userInfo && store.state.user.userInfo.token) {
  //   // 如果存在，那么就将 token 放在 Authorization 头中
  //   config.headers.Authorization = `bearer ${store.state.user.userInfo.token}`;
  // }

  return conf;
}, (error) => {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use((response) => {
  return HandlerExceptions(response);
}, (error) => {
  try {
    HandlerExceptions(error.response.data);
  } catch (e) {
    return false;
  }
});

export default new BaseHttp(axios);
