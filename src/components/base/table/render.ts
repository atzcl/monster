/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.atzcl.cn
+-----------------------------------------------------------------------------------------------------------------------
| 用于 Table 使用的函数式组件，主要是用来执行 render
|
*/

export default {
  name: 'BaseTableRender',
  functional: true,
  props: {
    row: { type: Object, required: true },
    render: { type: Function, required: true },
    index: { type: Number, required: true },
    column: { type: Object, default: null },
  },
  render: (h: any, ctx: any) => {
    const params: any = {
      row: ctx.props.row,
      index: ctx.props.index,
    };

    if (ctx.props.column) {
      params.column = ctx.props.column;
    }

    return ctx.props.render(h, params);
  },
};
