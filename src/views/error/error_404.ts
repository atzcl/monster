'use strict'

import { Component, Vue } from 'vue-property-decorator'

import './error_404.styl'
import * as Template from './error_404.html'

@Template
@Component
export default class ERROR404 extends Vue {}
