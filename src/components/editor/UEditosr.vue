<template>
  <script :id="editor_id" name="content" type="text/plain"></script>
</template>

<script lang="ts">
  'use strict'

  import { Vue, Component, Emit, Prop, Watch } from 'vue-property-decorator'
  import util from '../../utils/utils'

  @Component
  export default class UEditors extends Vue {
    // 目录路径
    @Prop({ default: '/static/ueditor/' })
    UEditorPath: String

    // 配置项
    @Prop({ default: () => {} })
    UEditorConfig: Object

    @Prop()
    UEditorContent: String

     // 编辑器 ID
    editorID: string = 'editor_id_' + util._randomWord(true, 6, 10)
    instance: string = null
    // scriptTagStatus -> 0:代码未加载，1:两个代码依赖加载了一个，2:两个代码依赖都已经加载完成
    scriptTagStatus : number = 0
    UEditorDefault : any = this.UEditorContent

    created () {
      if ((<any>window).UE !== undefined) {
        // 如果全局对象存在，说明编辑器代码已经初始化完成，直接加载编辑器
        this.scriptTagStatus = 2
        this.initEditor()
      } else {
        // 如果全局对象不存在，说明编辑器代码还没有加载完成，需要加载编辑器代码
        this.insertScriptTag()
      }
    }

    beforeDestroy () {
      // 组件销毁的时候，要销毁 UEditor 实例
      if (this.instance !== null && this.instance.destroy) {
        this.instance.destroy()
      }
    }

    insertScriptTag () {
      // 获取 Script 节点
      let editorScript = <HTMLScriptElement> document.getElementById('editorScript')
      let configScript = <HTMLScriptElement> document.getElementById('configScript')

      // 如果这个tag不存在，则生成相关代码tag以加载代码
      if (editorScriptTag === null) {
        configScript = document.createElement('script')
        configScript.type = 'text/javascript'
        configScript.async = true
        configScript.src = this.UEditorPath + 'neditor.all.js'
        configScript.id = 'editorScript'

        editorScript = document.createElement('script')
        editorScript.type = 'text/javascript'
        editorScript.async = true
        editorScript.src = this.UEditorPath + 'neditor.config.js'
        editorScript.id = 'configScript'

        // 动态插入 header
        let oHead = document.getElementsByTagName('head')[0]
        oHead.appendChild(configScript)
        oHead.appendChild(editorScript)
      }

      // 等待代码加载完成后初始化编辑器
      if (configScript.onload) {
        this.scriptTagStatus++
      } else {
        configScript.addEventListener('load', () => {
          this.scriptTagStatus++
          configScript.onload = true
          this.initEditor()
        })
      }

      if (editorScript.onload) {
        this.scriptTagStatus++
      } else {
        editorScript.addEventListener('load', () => {
          this.scriptTagStatus++
          editorScript.onload = true
          this.initEditor()
        })
      }

      // 初始化
      this.initEditor()
    }

    initEditor () : any {
      // scriptTagStatus 为 2 的时候，说明两个必需引入的 js 文件都已经被引入，且加载完成
      if (this.scriptTagStatus === 2 && this.instance === null) {
        // Vue 异步执行 DOM 更新，这样一来代码执行到这里的时候可能 template 里面的 script 标签还没真正创建
        // 所以，我们只能在 nextTick 里面初始化 UEditor
        this.$nextTick(() => {
          this.instance =  (<any>window).UE.getEditor(
            this.editorID,
            this.UEditorConfig
          )

          // 绑定事件，当 UEditor 初始化完成后，将编辑器实例通过自定义的 ready 事件交出去
          this.instance.addListener('ready', () => {
            this.$emit('ready', this.instance)
            this.setContent()
          })

          // 监听编辑器内容更新
          this.instance.addListener('contentChange', () => {
            this.$emit('update:getContent', this.instance.getContent())
          })
        })
      }
    }

    setContent () {
      this.instance.setContent(this.UEditorDefault)
    }
  }
</script>