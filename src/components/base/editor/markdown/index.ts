import { Component, mixins, BaseMixin, Prop, Watch } from '@/baseExport';

import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

@Component({
  components: {
    mavonEditor,
  },
})
export default class BaseMarkdownEditor extends mixins(BaseMixin) {
  // 编辑器高度
  @Prop({ type: String, default: '500px' })
  height: string;

  // 编辑器宽度
  @Prop({ type: String, default: '100%' })
  width: string;

  // 编辑器内容
  @Prop({ type: String, required: true })
  value: string;

  // 当前组件编辑器的值
  editorContent: string = this.value;
  // 代码块高亮方案
  codeStyle: string = 'atom-one-dark';

  // 设置 style 样式
  get setStyle (): string {
    return `width: ${this.width}; height: ${this.height}`;
  }

  /**
   * 图片上传
   *
   * @param {number} index 当前上传图片的索引值
   * @param {string | Blob} file
   */
  addimage (index: number, file: string | Blob): void {
    const formdata = new FormData();
    formdata.append('file', file);

    this.$http.setData(formdata)
      .setHeaders({ 'Content-Type': 'multipart/form-data' })
      .post('/editor/server?action=uploadImage')
      .then((res: any) => {
        // 将上传成功返回的图片 url 替换到原来的位置
        mavonEditor.$img2Url(index, res.url);
      });
  }

  @Watch('editorContent')
  onEditorContent (val: string, oldVal: string) {
    this.$emit('update:value', val);
  }
}
