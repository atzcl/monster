<template>
  <el-row :gutter="20" class="statistics">

    <el-col
      :span="6"
      v-for="(item, index) in data"
      :key="index"
      class="cell"
    >
      <div class="contai">
        <div class="title"> {{ item.title }} </div>
        <div class="count">
          <z-icon name="liuliang" :style="item.style" />
          <span class="number">{{ item.count }}</span>
        </div>
        <div class="footer" :style="{ color: footerStyle(item.scale) }">
          <z-icon :name="footerIcon(item.scale)" /> {{ item.scale }}
        </div>
      </div>
    </el-col>

  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Statistics extends Vue {
  @Prop({ type: Array, required: true })
  data: any[];

  footerStyle (value: boolean) {
    return value ? '#70CC29' : '#fc0d1c';
  }

  footerIcon (value: boolean) {
    return value ? 'arrowup' : 'arrowdown';
  }
}
</script>

<style lang="stylus" scoped>
.statistics
  padding 10px 15px
  display flex
  justify-content space-between

  .contai
    display flex
    flex-direction column
    justify-content center
    align-items center

    .title
      color #b2b2b2

    .count
      font-size 24px
      color #333
      margin 4px 0px

      .number
        margin-left 4px

    .footer
      opacity .8
</style>
