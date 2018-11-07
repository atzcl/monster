const path = require('path')

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

const baseUrl = 'http://kt.test'

// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = [ 'js', 'css' ]

// CDN 外链，会插入到 index.html 中
const cdn = {
  not_cdn_css: [
    '//at.alicdn.com/t/font_901683_zas65ziyk3.css'
  ],
  css: [
    'element-ui@2.4.8/lib/theme-chalk/index.css',
    'v-charts/lib/style.min.css',
  ],
  js: [
    'vue@2.5.17/dist/vue.min.js',
    'vue-router@3.0.1/dist/vue-router.min.js',
    // 'vuex@3.0.1/dist/vuex.min.js',
    'element-ui@2.4.9/lib/index.js',
    'axios@0.18.0/dist/axios.min.js',
    'echarts/dist/echarts.min.js',
    'v-charts/lib/index.min.js',
  ],
  defer: [
    '//at.alicdn.com/t/font_665796_7w1ilsivnthb0529.js'
  ]
}

module.exports = {
  // 项目部署的基础路径
  // 我们默认假设你的应用将会部署在域名的根部，
  // 比如 https://www.my-app.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/my-app/
  // 那么将这个值改为 `/my-app/`
  // baseUrl: '/static/app',

  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,

  // 使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,

  // babel-loader 默认会跳过 node_modules 依赖。
  // 通过这个选项可以显式转译一个依赖。
  transpileDependencies: [/* string or regex */],

  // 是否在模板编译过程中保留元素之间的空白。
  // 默认值是 `false`，以便减小编译好的代码和更好的性能。
  // preserveWhitepsace: false,

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  chainWebpack: config => {
    // 设置别名
    config.resolve
      .alias
      .set('views_alias', path.resolve('src/views'))
      .set('store_alias', path.resolve('src/store'))
      .set('cms_alias', path.resolve('src/views/cms'))
      .set('utils_alias', path.resolve('src/utils'))
      .set('mixins_alias', path.resolve('src/mixins'))
      .set('assets_alias', path.resolve('src/assets'))
      .set('extends_alias', path.resolve('src/extends'))
      .set('services_alias', path.resolve('src/services'))
      .set('components_alias', path.resolve('src/components'))

    /**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */
    config
    .plugin('html')
    .tap(args => {
      args[0].cdn = cdn
      return args
    })
  },
  configureWebpack: () => {
    const config = {};

    config.externals = {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT',
      'axios': 'axios',
      'VueI18n': 'VueI18n',
    }

    // lodash 按需加载
    config.plugins = [
      new LodashModuleReplacementPlugin()
    ];

    // 构建时开启 gzip，降低服务器压缩对 CPU 资源的占用，服务器也要相应开启 gzip
    productionGzip && config.plugins.push(
      new CompressionWebpackPlugin({
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 8192,
        minRatio: 0.8
      })
    )

    if (process.env.NODE_ENV === 'development') {
      /**
       * 关闭 host check，方便使用 ngrok 之类的内网转发工具
       */
      config.devServer = {
        disableHostCheck: true
      }
    }

    return config;
  },

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      stylus: {
        import: [
          // config.styl 全局变量文件
          path.resolve('src/assets/css/config.styl')
        ],
      }
    },
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8787,
    https: false,
    hotOnly: false,
    proxy: baseUrl, // string | Object
    before: app => {}
  },

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}
