<template>
  <el-dropdown trigger="click" @visible-change="messageTabsChange">
    <el-badge :value="8" :max="99" class="z-message main-aid-hover-bg z-cursor">
      <z-icon name="xiaoxi" style="" />
    </el-badge>
    <el-dropdown-menu slot="dropdown"
      class="z-header-message-box"
      v-loading="messageLoading"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, .5)"
    >
      <el-tabs v-model="activeName" type="border-card">

        <!-- 通知 -->
        <el-tab-pane :label="`通知 (${notifyList.length})`" name="notify">
          <ul>
            <li class="z-cursor" v-for="(item, index) in notifyList" :key="'notify_' + index">
              <img class="zcl-avatar" src="~assets_alias/images/message.png">
              <div class="content">
                <div class="title">
                  {{ item.type }}
                </div>
                <div class="desc zcl-one-row">
                  {{ item.detail }}
                </div>
                <div class="end">
                  {{ item.time }}
                </div>
              </div>
            </li>
          </ul>
          <div class="face">
            <div class="more z-cursor">查看更多</div>
            <div class="clear z-cursor">清空通知</div>
          </div>
        </el-tab-pane>

        <!-- 消息 -->
        <el-tab-pane :label="`消息 (${messageList.length})`" name="message">
          <ul>
            <li class="z-cursor" v-for="(item, index) in messageList" :key="'message_' + index">
              <img
              class="zcl-avatar"
              src="//user-gold-cdn.xitu.io/2017/12/6/1602b48722df7975?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
              >
              <div class="content">
                <div class="title">
                  {{ item.title }}
                </div>
                <div class="desc zcl-one-row">
                  {{ item.detail }}
                </div>
                <div class="end">
                  {{ item.time }}
                </div>
              </div>
            </li>
          </ul>
          <div class="face">
            <div class="more z-cursor">查看更多</div>
            <div class="clear z-cursor">清空通知</div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
  import vm from './';
  export default vm;
</script>
