<template>
  <div id="app">
    <!-- header -->
    <z-header></z-header>
    <!-- App Main -->
    <div class="zcl-main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
  'use strict'
  
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import ZHeader from 'components/header/Zheader'

  @Component({
    components: {
      ZHeader
    }
  })
  export default class App extends Vue {}
</script>

<style lang="stylus">
  @import './assets/css/app.styl'
  @import './assets/css/face.styl'
  @import './assets/css/common.styl'
</style>