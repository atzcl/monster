/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| axios 封装
|
*/

'use strict'

import axios from 'axios'
import config from './config'
import ElementUI from 'element-ui'

export default {
  /**
   * GET 请求
   * @param url
   * @param params
   */
  get (url: string, params) {
    // 重置请求 URL
    config.url = url
    // 重置 GET 携带参数
    config.params = params
    // 返回 Promise
    return axios
      .get(url, config)
      .then(res => {
        if (parseInt(res.data.code) === 200) {
          return res.data
        } else if (parseInt(res.data.code) === 403) {
          ElementUI.Message({
            message: res.data.msg,
            type: 'error'
          })
        }

        return false
      })
      .catch(error => {
        ElementUI.Message({
          message: error,
          type: 'error'
        })

        throw error
      })
  },
  /**
   * POST 请求
   *
   * @param url 请求 url
   * @param param 提交的数据
   */
  post (url: string, param) {
    // 重置 POST 提交数据
    config.data = param
    config.params = ''
    return axios
      .post(url, {}, config)
      .then(res => {
        if (parseInt(res.data.code) === 200) {
          return res.data
        }

        ElementUI.Message({
          message: res.data.msg,
          type: 'error'
        })

        return false
      })
      .catch(error => {
        ElementUI.Message({
          message: error,
          type: 'error'
        })

        throw error
      })
  },
  /**
   * PUT 请求
   *
   * @param url
   * @param param
   */
  put (url: string, data) {
    config.data = data
    config.params = ''
    return axios
      .put(url, {}, config)
      .then(res => {
        if (parseInt(res.data.code) === 200) {
          return res.data
        }

        ElementUI.Message({
          message: res.data.msg,
          type: 'error'
        })

        return false
      })
      .catch(error => {
        ElementUI.Message({
          message: error,
          type: 'error'
        })

        throw error
      })
  },
  /**
   * DELETE 请求
   *
   * @param url
   * @param param
   * @param params
   */
  delete (url, data, params) {
    config.data = data
    config.params = ''
    return axios
      .delete(url, config)
      .then(res => {
        if (parseInt(res.data.code) === 200) {
          return res.data
        }

        ElementUI.Message({
          message: res.data.msg,
          type: 'error'
        })

        return false
      })
      .catch(error => {
        ElementUI.Message({
          message: error,
          type: 'error'
        })

        throw error
      })
  }
}
