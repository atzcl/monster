<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
  'use strict'

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class WeChatModules extends Vue {}
</script>

<style lang="stylus">
</style>
