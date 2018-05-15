/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| 集中常用的模块到一起，然后集中导出
|
*/

import { mixins } from 'vue-class-component';
import { BaseMixin } from 'mixins_alias/BaseMixin';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

export {
  Vue,
  Prop,
  Watch,
  mixins,
  Component,
  BaseMixin,
};
