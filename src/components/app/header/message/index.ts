
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeaderMessage extends Vue {
  // 消息 tabs
  activeName: string = 'notify';
  // tabs 的 loading
  messageLoading: boolean = false;

  // 通知集合
  notifyList: any[] = [
    { type: '新订单通知', detail: 'Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机', time: '2分钟前' },
    { type: '新退款/退货通知', detail: 'Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机', time: '2分钟前' },
    { type: '新导入信息通知', detail: '用户信息导入成功，请前往查看', time: '2分钟前' },
    { type: '新导出信息通知', detail: '订单信息导入成功，请前往下载', time: '2分钟前' },
  ];

  // 消息集合
  messageList: any[] = [
    { title: 'atzcl 发表了新评论', detail: '6666', time: '2分钟前' },
    { title: 'atzcl 发表了新评论', detail: '6666', time: '2分钟前' },
    { title: 'atzcl 发表了新评论', detail: '6666', time: '2分钟前' },
    { title: 'atzcl 发表了新评论', detail: '6666', time: '2分钟前' },
  ];

  // 监听消息 tabs
  messageTabsChange (val: boolean) {
    this.messageLoading = true;

    setTimeout(() => {
      this.messageLoading = !val;
    }, 1000);
  }
}
