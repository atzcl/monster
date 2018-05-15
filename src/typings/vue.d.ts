import Vue from 'vue'

import HttpApi from '../request'

declare module 'vue/types/vue' {
  interface Vue {
    // 声明 Vue 的 http 指令
    $http: typeof HttpApi;
  }
}

declare global {
  // 拓展 Window 全局对象
  interface Window {
    UE: any;
    UEDITOR_CONFIG: any;
    UEDITOR_HOME_URL: string;
    NEDITOR_UPLOAD: string;
    loadEnv: any;
  }
}
