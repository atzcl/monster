/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| axios 配置
|
*/

'use strict'

import Qs from 'qs'

export default {
  // 请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  url: '/route',
  // `baseURL`将被添加到`url`前面，除非`url`是绝对的。
  // 可以方便地为 axios 的实例设置`baseURL`，以便将相对 URL 传递给该实例的方法。
  baseURL: '/system/v1/',
  // `method`是发出请求时使用的请求方法
  method: 'POST',
  transformRequest: [
    function (data) {
      // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
      // 由于使用的form-data传数据所以要格式化
      data = Qs.stringify(data)
      return data
    }
  ],
  transformResponse: [
    function (data) {
      // 这里提前处理返回的数据
      return data
    }
  ],
  // 请求头信息
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  // headers: {'Content-Type': 'application/json'},
  // post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  params: '',
  // 数据提交前的修改
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' })
  },
  // post/put/delete提交的数据
  data: {},
  // 设置超时时间
  timeout: 5000,
  // `withCredentials`指示是否跨站点访问控制请求
  // should be made using credentials
  withCredentials: false,
  // 返回数据类型
  responseType: 'json', // default
  // onUploadProgress: function (progressEvent) {
  // Do whatever you want with the native progress event
  // },
  // onDownloadProgress: function (progressEvent) {
  // Do whatever you want with the native progress event
  // },
  // `maxContentLength`定义允许的http响应内容的最大大小
  maxContentLength: 2000,
  // `validateStatus`定义是否解析或拒绝给定的promise
  // HTTP响应状态码。如果`validateStatus`返回`true`（或被设置为`null` promise将被解析;否则，promise将被
  // 拒绝。
  validateStatus: function (status) {
    return status >= 200 && status < 300 // default
  },
  // `maxRedirects`定义在node.js中要遵循的重定向的最大数量。
  // 如果设置为0，则不会遵循重定向。
  maxRedirects: 5
}
