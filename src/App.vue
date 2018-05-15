<template>
  <div id="app">
    <!-- App Main -->
    <div class="main">
      <!-- 菜单 -->
      <the-menu :menuArray="menuArray" />

      <!-- -->
      <div class="z_content" :style="conStyle">
          <!-- header -->
          <the-header />

          <!-- 主体区域 -->
          <div class="z_body">
            <keep-alive>
              <router-view :key="$route.fullpath" />
            </keep-alive>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, mixins, BaseMixin } from '@/baseExport';

import TheMenu from 'components_alias/app/menu/TheMenu.vue';
import TheHeader from 'components_alias/app/header/TheHeader.vue';

@Component({
  components: {
    TheMenu,
    TheHeader,
  },
})
export default class Main extends mixins(BaseMixin) {
   // 路由数组
  menuArray: any[] = [];

   // 折叠菜单的样式
  get conStyle () {
    const size = this.state.header.isCollapse ? 64 : 160;

    return `width: calc(100% - ${size}px); padding-left: ${size}px;`;
  }

  created () {
    setTimeout(() => {
      this.menuArray = [
        {
          id: 8,
          pid: 1,
          name: '站点设置',
          route: '#cms_config',
          icon: 'xitong',
          icon_style: 'position: relative; top: 2px; color: #000; font-size: 19px',
          children: [
            {
              id: 33,
              pid: 8,
              name: '网站设置',
              route: '/configs',
              icon: '',
              icon_style: '',
            },
            {
              id: 36,
              pid: 8,
              name: '七牛云配置',
              route: '/qiniu/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 39,
              pid: 8,
              name: '邮件配置',
              route: '/email',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 9,
          pid: 1,
          name: '轮播管理',
          route: '#cms_slides',
          icon: 'lunbozutu',
          icon_style: 'color: #000; font-size: 19px; ',
          children: [
            {
              id: 42,
              pid: 9,
              name: '轮播图列表',
              route: '/slides',
              icon: '',
              icon_style: '',
            },
            {
              id: 45,
              pid: 9,
              name: '创建/编辑',
              route: '/app/slides/form',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 10,
          pid: 1,
          name: '栏目管理',
          route: '#cms_column',
          icon: 'wangzhan',
          icon_style:
            'position: relative; top: 2px; color: #000; font-size: 17px;',
          children: [
            {
              id: 48,
              pid: 10,
              name: '栏目列表',
              route: '/app/column/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 51,
              pid: 10,
              name: '创建/编辑',
              route: '/app/column/form',
              icon: '',
              icon_style: '',
            },
            {
              id: 54,
              pid: 10,
              name: '回收站',
              route: '/app/column/recycle',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 11,
          pid: 1,
          name: '文章管理',
          route: '#cms_article',
          icon: 'articles',
          icon_style:
            'position: relative; top: 2px; color: #000; font-size: 18px',
          children: [
            {
              id: 56,
              pid: 11,
              name: '文章列表',
              route: '/app/article/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 59,
              pid: 11,
              name: '创建/编辑',
              route: '/app/article/form',
              icon: '',
              icon_style: '',
            },
            {
              id: 62,
              pid: 11,
              name: '回收站',
              route: '/app/article/recycle',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 12,
          pid: 1,
          name: '用户管理',
          route: '#member',
          icon: 'fenzu',
          icon_style:
            'position: relative; top: 2px; color: #000; font-size: 20px',
          children: [
            {
              id: 64,
              pid: 12,
              name: '用户列表',
              route: '/app/member/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 69,
              pid: 12,
              name: '下载频道',
              route: '/app/download/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 74,
              pid: 12,
              name: '行为管理',
              route: '/app/action/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 79,
              pid: 12,
              name: '行为日志',
              route: '/app/action_log/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 82,
              pid: 12,
              name: '评论管理',
              route: '/app/message/index',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 13,
          pid: 1,
          name: '数据分析',
          route: '#cms_analytics',
          icon: 'fenxi',
          icon_style:
            'position: relative; top: -2px; color: #000; font-size: 18px; ',
          children: [
            {
              id: 86,
              pid: 13,
              name: '访问数据列表',
              route: '/app/analytics/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 89,
              pid: 13,
              name: '访客分布',
              route: '/app/analytics/vd',
              icon: '',
              icon_style: '',
            },
            {
              id: 91,
              pid: 13,
              name: '来源分类',
              route: '/app/analytics/refer',
              icon: '',
              icon_style: '',
            },
            {
              id: 93,
              pid: 13,
              name: '终端详情',
              route: '/app/analytics/os',
              icon: '',
              icon_style: '',
            },
            {
              id: 95,
              pid: 13,
              name: '浏览器统计',
              route: '/app/analytics/browser',
              icon: '',
              icon_style: '',
            },
            {
              id: 97,
              pid: 13,
              name: '搜索引擎(爬虫)|运营商',
              route: '/app/analytics/robot',
              icon: '',
              icon_style: '',
            },
            {
              id: 86,
              pid: 13,
              name: '访问数据列表',
              route: '/app/analytics/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 89,
              pid: 13,
              name: '访客分布',
              route: '/app/analytics/vd',
              icon: '',
              icon_style: '',
            },
            {
              id: 91,
              pid: 13,
              name: '来源分类',
              route: '/app/analytics/refer',
              icon: '',
              icon_style: '',
            },
            {
              id: 93,
              pid: 13,
              name: '终端详情',
              route: '/app/analytics/os',
              icon: '',
              icon_style: '',
            },
            {
              id: 95,
              pid: 13,
              name: '浏览器统计',
              route: '/app/analytics/browser',
              icon: '',
              icon_style: '',
            },
            {
              id: 97,
              pid: 13,
              name: '搜索引擎(爬虫)|运营商',
              route: '/app/analytics/robot',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 14,
          pid: 1,
          name: '功能拓展',
          route: '#cms_expand',
          icon: 'tabbar_ico_analyse_nor',
          icon_style:
            'position: relative; top: 1px; color: #000; font-size: 18px',
          children: [
            {
              id: 100,
              pid: 14,
              name: '基础信息',
              route: '/app/expand/basis',
              icon: '',
              icon_style: '',
            },
            {
              id: 104,
              pid: 14,
              name: '友情链接',
              route: '/app/expand/link',
              icon: '',
              icon_style: '',
            },
          ],
        },
        {
          id: 15,
          pid: 1,
          name: '权限管理',
          route: '#cms_auth',
          icon: 'qxgl',
          icon_style:
            'position: relative; top: 1px; color: #000; font-size: 20px',
          children: [
            {
              id: 109,
              pid: 15,
              name: '后台操作日志',
              route: '/app/admin_log/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 112,
              pid: 15,
              name: '规则列表',
              route: '/app/auth_rules/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 117,
              pid: 15,
              name: '用户组列表',
              route: '/app/auth_group/index',
              icon: '',
              icon_style: '',
            },
            {
              id: 123,
              pid: 15,
              name: '管理员列表',
              route: '/app/user_admin/index',
              icon: '',
              icon_style: '',
            },
          ],
        },
      ];
    }, 1);
  }
}
</script>

<style scoped lang="stylus">
</style>
