/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| TypeScript .d.ts 声明
|
*/

declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module '*.html' {
    import Vue from 'vue'
    interface WithRender {
      <V extends Vue>(options: Vue.ComponentOptions<V>): Vue.ComponentOptions<V>
      <V extends typeof Vue>(component: V): V
    }
    const withRender: WithRender
    export = withRender
  }
  
