import Vue from 'vue';

// 全局配置文件
import AppConfig from '../config';

// 封装的 axios
import request from '@/request';

// 引入 lodash 工具库
import lodash from '@/utils/lodash';

export default {
  install: (vue: Vue | any) => {
    // 项目应用配置
    vue.prototype.$appConfig = AppConfig;
    // 将 axios 模块挂载到全局
    vue.prototype.$http = request;
    // 挂载 lodash 到全局
    vue.prototype.$_ = lodash;
    // 工具类
    // vue.prototype.$utils = utils;
  },
};
