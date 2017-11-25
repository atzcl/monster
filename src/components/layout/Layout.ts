'use strict'

import { Component, Vue, Prop } from 'vue-property-decorator'

import * as Template from './Layout.html'

@Template
@Component
export default class Layout extends Vue {
  @Prop()
  isLoading: Boolean
}
