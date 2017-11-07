const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    //你需要引入的第三方库文件
    vendor: [
      'vue',
      'vuex',
      'vue-router',
      'element-ui',
      'axios',
      'echarts/lib/echarts',
      'echarts/lib/chart/bar',
      'echarts/lib/chart/line',
      'echarts/lib/chart/pie',
      'echarts/lib/component/tooltip',
      'echarts/lib/component/title',
      'echarts/lib/component/legend',
      'echarts/lib/component/dataZoom',
      'echarts/lib/component/toolbox'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].js',
    library: '[name]'
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      filename: '[name].js',
      name: '[name]'
    })
  ]
}
