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
  goView (routeName: string) {
    this.$router.push({ name: routeName })
  }

  // 删除 tag
  closeTag (index: number, name: string) {
    this.$store.commit('removePage', index)
    let cachePage = this.$store.state.status.cachePage
    let toRoute = ''
    // 判断当前页面是否跟需要删除的页面是同一个
    if (this.$route.name === name) {
      if (cachePage.length > 1) {
        toRoute = cachePage[cachePage.length - 1].name
      } else {
        // 都没了，那么就返回首页呗
        toRoute = 'cms.index'
      }

      this.$router.push({ name: toRoute })
    }
  }
}
