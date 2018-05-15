<template>
  <el-card>
    <div class="form-container" style="width: 430px">
      <form-renderer label-width="80px" ref="form" :content="formConfig">

        <el-form-item class="submit-item">
          <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>

      </form-renderer>
    </div>
  </el-card>
</template>

<script lang="ts">
  import vm from './index';
  export default vm;
</script>

<style lang="stylus" scoped>
</style>
