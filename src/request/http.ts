/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| http 请求类
|
*/

import { AxiosInstance, AxiosStatic } from 'axios';

// 判断是否符合返回调用方的需求
const isObjectHasAttr = (res: any) => {
  return res && res.data && res.data.code && parseInt(res.data.code) === 200 ? res.data : null;
};

/**
 * 请求类
 *
 * @class BaseHttp
 */
class BaseHttp {
  // 请求实例
  httpInstance: AxiosInstance & AxiosStatic;
  // 请求数据
  data: any = null;
  // request query
  params: any = null;
  // 请求头
  headers: any = null;

  constructor (axiosInstance: AxiosInstance & AxiosStatic) {
    this.httpInstance = axiosInstance;
  }

  /**
   * 设置请求 query
   *
   * @param {any} value
   * @returns {BaseHttp}
   */
  setParams (value: any) {
    this.params = value;

    return this;
  }

  /**
   * 设置请求的 data
   *
   * @param {any} value
   * @returns {BaseHttp}
   */
  setData (value: any) {
    this.data = value;

    return this;
  }

  /**
   * 设置请求头
   *
   * @param {any} value
   * @returns {BaseHttp}
   */
  setHeaders (value: object) {
    this.headers = value;

    return this;
  }

  /**
   * 发起请求
   *
   * @param method
   * @param url
   * @param data
   * @param params
   */
  async http (method: string, url: string, data: any = null, params: any = null) {
    // 请求配置
    const config: any = {};

    // 请求类型
    config.method = method;
    // 请求 url
    config.url = url;

    await Promise.all([
      this.isNeedSetData(config, 'headers'), // 设置请求头
      this.isNeedSetData(config, 'data', data), // 设置请求 data
      this.isNeedSetData(config, 'params', params), // 设置请求 query
    ]);

    // 返回请求 Promise
    return this.httpInstance(config);
  }

  /**
   * 返回 axios 静态相关方法、属性
   *
   * @returns {Promise<AxiosStatic>}
   * @memberof BaseHttp
   */
  getAxios(): AxiosStatic {
    return this.httpInstance;
  }

  /**
   * GET 请求
   *
   * @param {string} url 请求地址
   * @param {any} params request query
   */
  async get (url: string, params?: any) {
    return this.http('get', url, null, params).then((res: any) => {
      return isObjectHasAttr(res);
    });
  }

  /**
   * POST 请求
   *
   * @param {string} url 请求 url
   * @param {any} data form data
   */
  async post (url: string, data?: any) {
    return this.http('post', url, data).then((res: any) => {
      return isObjectHasAttr(res);
    });
  }

  /**
   * PUT 请求
   *
   * @param {string} url 请求 url
   * @param {any} data form data
   */
  async put (url: string, data?: any) {
    return this.http('put', url, data).then((res: any) => {
      return isObjectHasAttr(res);
    });
  }

  /**
   * DELETE 请求
   *
   * @param {string} url 请求 url
   * @param {any} data form data
   * @param {any} params request query
   */
  async delete (url: string, data?: any, params?: any) {
    return this.http('delete', url, data, params).then((res) => {
      return isObjectHasAttr(res);
    });
  }

  /**
   * 根据传入值，判断是否需要设置相关值
   *
   * @param {object} source 数据源
   * @param {string} propertyName
   * @param {any} value
   */
  async isNeedSetData (source: any, propertyName: string, value: any = null) {
    // 判断传入的 property1 字面属性是否存在
    if ((propertyName in (this as BaseHttp))) {
      const propertyData = (this as any)[propertyName];

      // 如果当前类的指定属性不为 null, 那么就给源数据也创建该属性值
      if (propertyData !== null) {
        source[propertyName] = propertyData;
      } else if (value !== null) {
        // 如果传入的 value 不为空
        source[propertyName] = value;
      }
    }

    return source;
  }
}

export default BaseHttp;
