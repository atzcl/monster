'use strict'

import { Component, Prop, Vue } from 'vue-property-decorator'

import './TagsPage.styl'
import * as Template from './TagsPage.html'

@Template
@Component
export default class TagsPage extends Vue {
  // 自定义样式
  @Prop({ type: String })
  styles

  dynamicTags = ['标签一', '标签二', '标签三']
}
