'use strict'

import { Component, Prop, Vue } from 'vue-property-decorator'

import './Loading.styl'
import * as Template from './Loading.html'

@Template
@Component
export default class SkeletonLoading extends Vue {
  // 自定义样式
  @Prop({ type: String })
  styles
}
