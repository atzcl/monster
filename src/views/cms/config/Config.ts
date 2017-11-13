'use strict'

import { Component, Vue, Watch } from 'vue-property-decorator'

import UEditor from 'components/editor/UEditor.vue'

import * as Template from './Config.html'

@Template
@Component({
  components: {
    UEditor
  }
})
export default class CMSConfig extends Vue {
  content: string = 'Hello'

  @Watch('content')
  onContent (newVal, oldVal) {
    console.log(newVal)
  }
}
