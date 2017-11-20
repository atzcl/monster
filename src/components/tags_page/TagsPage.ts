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

  // 路由跳转
  goView (routeName) {
    this.$router.push({name: routeName})
  }

  // 删除 tag
  closeTag (index) {
    console.log(index)
  }
}
