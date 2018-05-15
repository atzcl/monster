<template>
  <header class="header">
    <div class="con">
      <z-icon class="trigger" :name="triggerClass" @click="clickCollapse" />
      <div class="zcl-nav">
        <ul>
          <li class="z-cursor is-active main-aid-hover-bg">
            <z-icon name="wangzhan" style="top: 2px;" />CMS</li>
          <li class="z-cursor main-aid-hover-bg">
            <z-icon name="weixin" style="top: 3px; font-size: 22px" />微信</li>
          <li class="z-cursor main-aid-hover-bg">
            <z-icon name="shangpin1" style="top: 1px;" />商城</li>
        </ul>
      </div>
      <div class="rights">
        <!-- 消息通知 -->
        <the-header-message />

        <!-- 用户 -->
        <the-header-user />
      </div>
    </div>

  </header>
</template>

<script lang="ts">
  import vm from './';
  export default vm;
</script>

<style lang="stylus">
@import 'index.styl'
</style>
