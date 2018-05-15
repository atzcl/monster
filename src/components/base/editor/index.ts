import { Component, mixins, BaseMixin, Prop, Watch } from '@/baseExport';

@Component
export default class BaseEditor extends mixins(BaseMixin) {
  // 编辑器目录路径
  @Prop({ type: String, default: '/static/neditor/' })
  path: string;

  // 上传路径
  @Prop({ type: String, default: '/editor/server' })
  server: string;

  // 配置项
  @Prop({ type: Object, default: () => {
    return { autoHeightEnabled: false };
  }})
  config: object;

  // 编辑器内容
  @Prop({ type: String, required: true })
  value: string;

  // 是否使用本地 js 文件
  @Prop({ type: Boolean, default: false })
  isLocal: boolean;

  // 编辑器高度
  @Prop({ type: Number, default: 500 })
  height: number;

  // 编辑器宽度
  @Prop({ type: String, default: '100%' })
  width: string;

  // 为了避免麻烦，每个编辑器实例都用不同的 id
  id: string = 'editor_id_' + Math.random().toString().slice(-10);
  // 编辑器实例
  instance: any = null;
  // 预设
  placeholder: string = '<p style="color: rgba(0, 0, 0, 0.52);">开始创作吧 ─=≡Σ(((つ•̀ω•́)つ</p>';

  // 设置 style 样式
  get setStyle (): string {
    return `width: ${this.width};`;
  }

  // 实现 v-model
  @Watch('value', { immediate: true })
  onValue (val: string, oldVal: string) {
    ! this.instance ? this.beforeInitEditor(val) : this.setContent(val);
  }

  /**
   * 加载之前需要做的事情
   *
   * @param {string} value 传入的值
   */
  beforeInitEditor (value: string): void {
    // 设置 ueditor 目录路径
    window.UEDITOR_HOME_URL = this.path;
    // 设置 ueditor 上传路径
    window.NEDITOR_UPLOAD = this.server;

    // 判断是否已经加载相关 js,并初始化完成
    if (!window.UE && !window.UEDITOR_CONFIG) {
      Promise.all([
        // 加载 ueditor 源码文件
        this.loadScripts('ueditorScript'),
        // 加载 ueditor 配置文件
        this.loadScripts('ueditorConfigScript'),
      ]).then(() => {
        this.initEditor(value);
      });
    }
  }

  /**
   * 加载 js [ 本地 or 远程 ]
   *
   * @param {string} loadType
   * @returns void
   */
  loadScripts (loadType: string) {
    return new Promise((resolve, reject) => {
      const scriptType: any = {
        ueditorScript: `neditor.all.min.js`, // ueditor 源码 js
        ueditorConfigScript: 'neditor.config.js', // // ueditor 配置 js
      };

      let editorScript: any = document.getElementById(loadType);

      // 如果这个 js 不存在，则执行需要加载
      if (editorScript === null) {
        editorScript = document.createElement('script'); // 创建节点
        editorScript.type = 'text/javascript'; // 类型
        editorScript.src = this.getScriptSrc(scriptType[loadType]) ; // 路径
        editorScript.id = loadType; // id

        // 插入文档中
        document.getElementsByTagName('head')[0].appendChild(editorScript);

        // 监听 ueditor 的 load 事件来确定加载完成
        editorScript.addEventListener('load', () => {
          resolve();
        });
      }
    });
  }

  /**
   * 根据 isLocal 来加载远程或者本地的 js 文件
   *
   * @param {string} fileName
   * @returns string
   */
  getScriptSrc (fileName: string): string {
    const path = this.isLocal ? this.path : '//store.zcloop.com/static/js/';

    return path + fileName;
  }

  /**
   * 初始化编辑器
   *
   * @param {string} value
   */
  initEditor (value: string): void {
    this.$nextTick(() => {
      const config = { ...this.config, ...{
        initialFrameHeight: this.height,
      } };

      // 创建 ueditor 实例
      this.instance = window.UE.getEditor(this.id, config);

      // 监听 ueditor 的 ready 事件
      this.instance.addListener('ready', () => {
        // 提供 ueditor 的 ready 事件给父组件，参数为当前 ueditor 实例
        this.$emit('ready', this.instance);

        // 设置 ueditor 默认值
        this.instance.setContent(this.getDefaultValue(value));

        // 监听 ueditor 的 contentChange 事件，用于获取 ueditor 实时数据变动
        this.instance.addListener('contentChange', () => {
          this.$emit('input', this.instance.getContent());
        });
      });
    });
  }

  /**
   * 获取默认值
   *
   * @param {string} value
   * @returns {string}
   */
  getDefaultValue (value: string): string {
    if (value === '' || value === null || value === undefined) {
      value = this.placeholder;
    }

    return value;
  }

  // 设置编辑器的值
  setContent (value: string): void {
    if (value !== this.instance.getContent()) {
      this.instance.setContent(value);
    }
  }

  beforeDestroy (): void {
    // 组件销毁的时候，要销毁 ueditor 实例
    if (this.instance !== null && this.instance.destroy) {
      this.instance.destroy();
    }
  }
}
