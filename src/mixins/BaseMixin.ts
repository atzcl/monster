/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| 基础 mixin
|
*/

import { Component, Vue } from 'vue-property-decorator';
import { MyState } from '../typings/vuex';

@Component
export class BaseMixin extends Vue {
  // 简化 state 的使用，并且增加智能提示
  get state () {
    return this.$store.state as MyState;
  }
}
