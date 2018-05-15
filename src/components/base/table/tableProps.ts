import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export class BaseTablPropsMixin extends Vue {
  // loading
  @Prop({ type: Boolean, default: false })
  loading: boolean;

  // Table 数据源
  @Prop({ type: Array, required: true })
  tableData: any[];

  // 是否带有纵向边框
  @Prop({ type: Boolean, default: true })
  border: boolean;

  // 是否为斑马纹 table
  @Prop({ type: Boolean })
  stripe: boolean;

  // Table 高度
  @Prop({ type: [ String, Number ] })
  height: string | number;

  // Table 的最大高度
  @Prop({ type: [ String, Number ] })
  maxHeight: string | number;

  // 列的宽度是否自撑开
  @Prop({ type: Boolean, default: true })
  fit: boolean;

  // 是否显示表头
  @Prop({ type: Boolean, default: true })
  showHeader: boolean;

  // 额外的 style 样式
  @Prop({ type: String, default: 'width: 100%;' })
  styles: string;

  // Table 数据为空的文字提示
  @Prop({ type: String, default: '暂无数据 (灬ºｏº灬)' })
  emptyText: string;

  // 排序
  @Prop({ type: Object })
  defaultSort: object;

  /**
   * table column attributes 配置
   * 可选配置:
   * {
   *    type: string --- 对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮
   *
   *    prop: string --- 对应列内容的字段名，也可以使用 property 属性
   *
   *    label: string --- 对应列的宽度
   *
   *    width: string --- 对应列的宽度
   *
   *    minWidth: string --- 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
   *
   *    fixed: string / boolean --- 列是否固定在左侧或者右侧，true 表示固定在左侧
   *
   *    renderHeader: Function(h, { column, $index }) --- 列标题 Label 区域渲染使用的 Function
   *
   *    sortable: string / boolean --- 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件
   *
   *    sortMethod: Function(a, b) --- 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致
   *
   *    formatter: Function(row, column, cellValue, index) --- 用来格式化内容
   *
   *    showOverflowTooltip: boolean --- 当内容过长被隐藏时显示 tooltip
   *
   *    align: string --- 对齐方式, left/center/right
   *
   *    headerAlign: string --- 表头对齐方式，若不设置该项，则使用表格的对齐方式
   *
   *    className: string --- 列的 className
   *
   *    selectable: Function(row, index) --- 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
   *
   *    reserveSelection: boolean --- 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）
   *
   *    filters: Array[{ text, value }] --- 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性
   *
   *    filterPlacement: string --- 过滤弹出框的定位, 与 Tooltip 的 placement 属性相同
   *
   *    filterMultiple: boolean --- 数据过滤的选项是否多选
   *
   *    filterMethod: Function(value, row, column) --- 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示
   *
   *    filteredValue: Array --- 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性
   *
   *    slotName: string --- slot 插槽名称
   *
   *    render: Function(h, { column, $index }) --- table-column render 渲染函数
   * }
   */
  @Prop({ type: Array, required: true })
  columns: any[];
}
