<template>
  <div>
    <u-editor :UEditorContent.sync="content" style="width: 800px"></u-editor>
  </div>
</template>
<script>
  'use strict'

  import UEditor from 'components/editor/UEditor'

  export default {
    name: 'cmsConfig',
    data () {
      return {
        content: 'Hello'
      }
    },
    components: {
      UEditor
    },
    watch: {
      content (newVal, oldVal) {
        console.log(newVal)
      }
    },
    methods: {
    }
  }
</script>
<style lang="stylus">
</style>
