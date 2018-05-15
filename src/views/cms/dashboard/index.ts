import { Component, Vue, Watch } from 'vue-property-decorator';

import Statistics from 'views_alias/cms/dashboard/statistics/Statistics.vue';
import Skeleton from 'components_alias/base/skeleton/default/DefaultSkeleton.vue';

@Component({
  components: {
    Skeleton,
    Statistics,
  },
})
export default class CmsDashboard extends Vue {
  // 数据统计分析
  statisticsData = [
    { title: '总浏览 PV', icon: 'liuliang', count: '199,999', style: 'color: #2c93fc; top: 0px;', isUp: true, scale: '22%' },
    { title: '总浏览 PV', icon: 'liuliang', count: '199,999', style: 'color: #2c93fc; top: 0px;', isUp: true, scale: '22%' },
    { title: '总浏览 PV', icon: 'liuliang', count: '199,999', style: 'color: #2c93fc; top: 0px;', isUp: true, scale: '22%' },
    { title: '总浏览 PV', icon: 'liuliang', count: '199,999', style: 'color: #2c93fc; top: 0px;', isUp: true, scale: '22%' },
  ];

  // 折线
  chartData = {
    columns: ['date', 'pc', 'wap'],
    rows: [
      { date: '11-13', pc: 1523, wap: 541 },
      { date: '11-13', pc: 1223, wap: 965 },
      { date: '11-13', pc: 2123, wap: 471 },
      { date: '11-13', pc: 4123, wap: 1523 },
      { date: '11-13', pc: 3123, wap: 654 },
      { date: '11-13', pc: 7123, wap: 88 },
    ],
  };

  // 折线
  colors = ['#6DD8D9', '#BEE6FF'];

  // 折线
  chartSettings = {
    labelMap: {
      date: '日期',
      pc: 'PC端',
      wap: '移动端',
    },
    stack: { pcAndWap: ['PC端', '移动端'] }, // 数据的相同部分进行堆叠
    area: true,
  };

  // table
  tableData = [
    {
      name: '佛山',
      value: 1908,
    },
    {
      name: '深圳',
      value: 123,
    },
    {
      name: '上海',
      value: 516,
    },
    {
      name: '杭州',
      value: 12,
    },
    {
      name: '广州',
      value: 63,
    },
    {
      name: '福州',
      value: 1,
    },
    {
      name: '北京',
      value: 16,
    },
    {
      name: '齐齐哈尔',
      value: 1,
    },
    {
      name: '南京',
      value: 1,
    },
  ];

  tableColumns = [
    {
      attrs: 'name',
      label: '城市',
      width: 199,
      align: 'center',
    },
    {
      attrs: 'value',
      label: 'PV',
      width: 194,
      align: 'center',
    },
  ];

  // 柱状
  mapData = {
    columns: ['region', 'resume'],
    rows: [
      { region: '佛山', resume: 123 },
      { region: '深圳', resume: 1223 },
      { region: '上海', resume: 2123 },
      { region: '杭州', resume: 4123 },
      { region: '广州', resume: 3123 },
      { region: '福州', resume: 7123 },
      { region: '北京', resume: 2123 },
      { region: '齐齐哈尔', resume: 4123 },
      { region: '南京', resume: 3123 },
      { region: '福州', resume: 7123 },
      { region: '南京', resume: 3123 },
      { region: '福州', resume: 7123 },
    ],
  };

  // 柱状
  mapSettings = {
    labelMap: {
      resume: 'PV 访问量',
    },
  };

  // 利用边距来解决 x 轴文字过多导致显示不全的问题
  grid = {
    x2: 15,
  };
}
