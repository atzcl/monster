'use strict'

import { Component, Vue } from 'vue-property-decorator'

import * as Template from './Config.html'

@Template
@Component
export default class CMSConfig extends Vue {
  isLoading: boolean = true
  // tabs 默认展开
  activeName: string = 'basic'
  // 表单数据
  ruleForm: any = {
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: ''
  }

  // 表单验证规则
  rules: any = {}

  activated () {
    this.initData()
  }

  initData () {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }

  submit () {
    this.$message({
      showClose: true,
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    })
  }
}
