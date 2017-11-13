'use strict'

import Vue from 'vue'
import Component from 'vue-class-component'

import * as Template from './Index.html'
import SkeletonLoading from 'components/skeleton/Loading'

@Template
@Component({
  components: {
    SkeletonLoading
  }
})
export default class CMSIndex extends Vue {
  chartData = {
    columns: ['日期', 'PC端', '移动端'],
    rows: [
      { '日期': '11-13', 'PC端': 1523, '移动端': 541 },
      { '日期': '11-13', 'PC端': 1223, '移动端': 965 },
      { '日期': '11-13', 'PC端': 2123, '移动端': 471 },
      { '日期': '11-13', 'PC端': 4123, '移动端': 1523 },
      { '日期': '11-13', 'PC端': 3123, '移动端': 654 },
      { '日期': '11-13', 'PC端': 7123, '移动端': 88 }
    ]
  }

  colors = ['#6DD8D9', '#BEE6FF']

  chartSettings = {
    stack: { '本周访问设备数据': ['PC端', '移动端'] },
    area: true
  }
}
