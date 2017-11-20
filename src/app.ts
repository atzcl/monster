'use strict'

import Vue from 'vue'
import Component from 'vue-class-component'

import * as Template from './app.html'

// 导入样式
import './assets/css/app.styl'
import './assets/css/face.styl'
import './assets/css/common.styl'

@Template
@Component
export default class App extends Vue {}
