<template>
  <div id="app">
    <!-- header -->
    <z-header v-on:clickCollapse="clickCollapse"></z-header>
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
  export default class App extends Vue {
    // methods 方法
    clickCollapse () {
      // 变动菜单状态
      this.$store.dispatch('ToggleMenu')
    }
  }
</script>

<style lang="stylus">
  @import './assets/css/app.styl'
  @import './assets/css/face.styl'
  @import './assets/css/common.styl'
</style>