'use strict'

import { Component, Vue, Watch } from 'vue-property-decorator'

import UEditor from 'components/editor/UEditor.ts'

import * as Template from './Article.html'

@Template
@Component({
  components: {
    UEditor
  }
})
export default class CMSArticle extends Vue {
  content: string = ''

  // 监听 UEditor 数据变动
  @Watch('content')
  onContent (newVal, oldVal) {
    // console.log(newVal)
  }
}
