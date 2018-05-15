/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| axios 异常处理
|
*/

import { Message } from 'element-ui';

// 基础错误提示
const errorMsg = '请求出错，请检查相关接口是否正常';

// 处理异常
const handleeError = (res: any) => {
  // 这里不根据 http 状态码来判断，而是根据返回的 data 数据里面的 code 状态码来进行判断
  if (!res.data) {
    Message.error(errorMsg);
    return;
  }

  // 如果返回的 code 为 200，即请求成功
  if (res.data.code !== 200) {
    // 判断请求错误状态
    switch (res.data.code) {
      case 401:
        // 注销登录 [ 可能 ]，并重定向会登录页
        // (new Login()).logout();
        break;
      case 403:
        Message.error('您没有相关权限');
        break;
      default:
        Message.error(res.data.msg === '' ? errorMsg : res.data.msg);
    }

    res = false;
  }

  return res;
};

export default handleeError;
