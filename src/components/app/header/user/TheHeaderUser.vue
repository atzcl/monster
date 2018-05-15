<template>
  <el-dropdown @visible-change="visibleChange">
    <span class="el-dropdown-link">
      <span class="action-right main-aid-hover-bg">
        <span class="avatar zcl-avatar zcl-avatar-sm">
          <img :src="userInfo.avatar" alt="zcl-avatar">
        </span>
        {{ userInfo.nickname }}
        <i class="el-icon-arrow-down" :class="dropdownICON"></i>
      </span>
    </span>
    <el-dropdown-menu slot="dropdown" class="z-users">

      <el-dropdown-item
        v-for="item in features"
        :key="item.icon"
      >
        <z-icon
          :name="item.icon"
          :style="item.style"
          :class="item.class"
        />
        {{ item.name }}
      </el-dropdown-item>

    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
  import vm from './';
  export default vm;
</script>
