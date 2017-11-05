<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" :unique-opened="true"
             :router="true" :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>
      
      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
  'use strict'

  import Vue from 'vue'
  import Component from 'vue-class-component'

  const item = {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }

  @Component
  export default class MallModules extends Vue {
    tableData = Array(20).fill(item)
    routerArray = [
      {
        id: 23,
        pid: 3,
        name: '商品管理',
        route: '#shop_goods',
        icon: 'icon zcl-shangpin',
        icon_style: 'top: -1px;position: relative;color: #000;font-size: 19px;',
        children: [
          {
            id: 152,
            pid: 23,
            name: '商品分类',
            route: '/app/shop/classify/index',
            icon: '',
            icon_style: ''
          },
          {
            id: 153,
            pid: 23,
            name: '商品列表',
            route: '/app/shop/goods/list',
            icon: '',
            icon_style: '',
            children: [
              {
                id: 222,
                pid: 153,
                name: 'SKU 笛卡尔积',
                route: 'admin/v1.shopgoods/get_descarte',
                icon: '',
                icon_style: ''
              }
            ]
          },
          {
            id: 154,
            pid: 23,
            name: '商品模型',
            route: '/app/shop/goods/model',
            icon: '',
            icon_style: ''
          },
          {
            id: 155,
            pid: 23,
            name: '商品规格',
            route: '/app/shop/goods/spec',
            icon: '',
            icon_style: ''
          },
          {
            id: 156,
            pid: 23,
            name: '品牌列表',
            route: '/app/shop/goods/brand',
            icon: '',
            icon_style: ''
          },
          {
            id: 157,
            pid: 23,
            name: '商品属性分类',
            route: '/app/shop/goods/attr_classify',
            icon: '',
            icon_style: ''
          },
          {
            id: 159,
            pid: 23,
            name: '商品属性值',
            route: '/app/shop/goods/attribute',
            icon: '',
            icon_style: ''
          },
          {
            id: 198,
            pid: 23,
            name: '商品咨询',
            route: '/app/shop/goods/advisory',
            icon: '',
            icon_style: ''
          }
        ]
      },
      {
        id: 24,
        pid: 3,
        name: '订单管理',
        route: '#shop_order',
        icon: 'icon zcl-dingdan',
        icon_style: 'top: 0px;position: relative;color: #000;font-size: 17px;',
        children: [
          {
            id: 158,
            pid: 24,
            name: '订单列表',
            route: '/app/shop/order/index',
            icon: '',
            icon_style: ''
          },
          {
            id: 160,
            pid: 24,
            name: '发货管理',
            route: '/app/shop/order/list',
            icon: '',
            icon_style: ''
          },
          {
            id: 161,
            pid: 24,
            name: '退换货管理',
            route: '/app/shop/order/sip',
            icon: '',
            icon_style: ''
          },
          {
            id: 162,
            pid: 24,
            name: '退款管理',
            route: '/shop/order/retrn',
            icon: '',
            icon_style: ''
          },
          {
            id: 163,
            pid: 24,
            name: '订单日志',
            route: '/app/shop/order/refund',
            icon: '',
            icon_style: ''
          }
        ]
      }
    ]
  }
</script>

<style lang="stylus">
</style>
