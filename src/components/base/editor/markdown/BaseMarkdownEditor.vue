<template>
  <mavon-editor
    :ishljs="true"
    :style="setStyle"
    @imgAdd="addimage"
    :codeStyle="codeStyle"
    v-model="editorContent"
    placeholder="开始创作吧 ─=≡Σ(((つ•̀ω•́)つ"
  />
</template>

<script lang="ts">
  import vm from './index';
  export default vm;
</script>

<style lang="stylus">
</style>
