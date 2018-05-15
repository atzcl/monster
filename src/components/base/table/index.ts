import { Component, mixins, BaseMixin } from '@/baseExport';
import { BaseTablPropsMixin } from './tableProps';
import Render from './render';

@Component({
  components: {
    Render,
  },
})
export default class BaseTable extends mixins(
  BaseMixin, BaseTablPropsMixin,
) {

  /**
   * 回传 el-table 的相关时间
   *
   * @param eventName 事件名称
   */
  emitEventHandler (eventName: string) {
    this.$emit(eventName, ...Array.from(arguments).slice(1));
  }
}
