<template>
  <script :id="editorID" name="content" type="text/plain"></script>
</template>

<script>
  'use strict'

  import util from 'utils/utils'

  export default {
    name: 'UEditor',
    props: {
      // 目录路径
      UEditorPath: {
        type: String,
        default: '/static/ueditor/'
      },
      // 配置项
      UEditorConfig: {
        type: Object,
        default: () => {}
      },
      // 编辑器内容
      UEditorContent: {
        type: String
      },
      // 是否应用 min
      isMin: {
        type: String,
        default: 'min.'
      }
    },
    data () {
      return {
        // 为了避免麻烦，每个编辑器实例都用不同的 id
        editorID: 'editor_id_' + util._randomWord(true, 4, 16),
        instance: null,
        // scriptTagStatus -> 0:代码未加载，1:两个代码依赖加载了一个，2:两个代码依赖都已经加载完成
        scriptTagStatus: 0,
        UEditorDefault: this.UEditorContent
      }
    },
    created () {
      if (window.UE !== undefined) {
        // 如果全局对象存在，说明编辑器代码已经初始化完成，直接加载编辑器
        this.scriptTagStatus = 2
        this.initEditor()
      } else {
        // 如果全局对象不存在，说明编辑器代码还没有加载完成，需要加载编辑器代码
        this.insertScriptTag()
      }
    },
    beforeDestroy () {
      // 组件销毁的时候，要销毁 UEditor 实例
      if (this.instance !== null && this.instance.destroy) {
        this.instance.destroy()
      }
    },
    methods: {
      insertScriptTag () {
        // 获取动态创建的 script
        let editorScriptTag = document.getElementById('editorScriptTag')
        let configScriptTag = document.getElementById('configScriptTag')

        // 如果这个tag不存在，则生成相关代码tag以加载代码
        if (editorScriptTag === null) {
          // 创建引入 ueditor.config.js
          configScriptTag = document.createElement('script')
          configScriptTag.type = 'text/javascript'
          configScriptTag.src = this.UEditorPath + 'neditor.config.js'
          configScriptTag.id = 'configScriptTag'

          // 创建引入 ueditor.all.js
          editorScriptTag = document.createElement('script')
          editorScriptTag.type = 'text/javascript'
          editorScriptTag.src = this.UEditorPath + 'neditor.all.' + this.isMin + 'js'
          editorScriptTag.id = 'editorScriptTag'

          // 添加到 head
          let s = document.getElementsByTagName('head')[0]
          s.appendChild(configScriptTag)
          s.appendChild(editorScriptTag)
        }

        // 等待代码加载完成后初始化编辑器
        if (configScriptTag.loaded) {
          this.scriptTagStatus++
        } else {
          configScriptTag.addEventListener('load', () => {
            this.scriptTagStatus++
            configScriptTag.loaded = true
            this.initEditor()
          })
        }

        if (editorScriptTag.loaded) {
          this.scriptTagStatus++
        } else {
          editorScriptTag.addEventListener('load', () => {
            this.scriptTagStatus++
            editorScriptTag.loaded = true
            this.initEditor()
          })
        }

        this.initEditor()
      },
      initEditor () {
        // scriptTagStatus 为 2 的时候，说明两个必需引入的 js 文件都已经被引入，且加载完成
        if (this.scriptTagStatus === 2 && this.instance === null) {
          // Vue 异步执行 DOM 更新，这样一来代码执行到这里的时候可能 template 里面的 script 标签还没真正创建
          // 所以，我们只能在 nextTick 里面初始化 UEditor
          this.$nextTick(() => {
            this.instance = window.UE.getEditor(
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
              this.$emit('update:UEditorContent', this.instance.getContent())
            })
          })
        }
      },
      setContent () {
        // 设置默认内容
        this.instance.setContent(this.UEditorDefault)
      }
    }
  }
</script>