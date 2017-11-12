import SkeletonLoading from './Loading.ts'
// 这里是重点
const Loading = {
  install: (Vue) => {
    Vue.component('SkeletonLoading', SkeletonLoading)
  }
}

// 导出组件
export default Loading