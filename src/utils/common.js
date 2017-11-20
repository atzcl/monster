/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 共用类库
|
*/

'use strict'

const _ReturnIsNull = (val) => {
  return val === '' || val === null || val === undefined || val.length === 0 ? 0 : 1
}

// 返回日期设定
const _ReturnTime = {
  shortcuts: [{
    text: '最近一周',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}

// 返回 1 或者 0
const _StatusInt = (val) => {
  return val === 1 ? 0 : 1
}

// 返回 1 或者 0
const _getStatusInt = (val) => {
  return val === true ? 1 : 0
}

// 图片上传接口
const _PicUploads = '/system/v1/pic_uploads'

// 富文本图片上传
const _EditorUploads = '/system/v1/editor_uploads'

// 文件上传接口
const _FileUploads = [
  '/system/v1/file_uploads',
  '/system/v1/wx_file_uploads',
  '/system/v1/video_uploads'
]

// 上传文件后缀数组
const _ValidateExtType = [
  '*',
  sessionStorage.getItem('uploadImgExp'),
  'ttf, woff, woff2, eot',
  'image/png, image/jpeg, image/x-icon, image/x-ico',
  sessionStorage.getItem('uploadFileExp'),
  sessionStorage.getItem('uploadVideExp')
]

// 上传文件大小数组
const _ValidateSize = [
  // 正常图片允许上传大小为 10MB
  parseInt(sessionStorage.getItem('uploadFileSize')),
  parseInt(sessionStorage.getItem('uploadImgSize')),
  // 小图为 1MB
  1,
  parseInt(sessionStorage.getItem('uploadVideoSize'))
]

// 验证上传文件后缀
const _ValidateExt = (ext, type = 1) => {
  return _ValidateExtType[type].indexOf(ext)
}

// 验证上传正常图片大小
const _ValidateThumb = (size, type = 0) => {
  return size / 1024 / 1024 > parseInt(_ValidateSize[type])
}

const _downloadType = (value) => {
  let result = ''
  switch (value) {
    case 0:
      result = '文章'
      break
    case 1:
      result = '文件'
      break
    case 2:
      result = '多图'
      break
    case 3:
      result = '视频'
      break
  }

  return result
}

// 通过字面量方式实现的函数each
const _each = (object, callback) => {
  let type = (function () {
    switch (object.constructor) {
      case Object:
        return 'Object'
      case Array:
        return 'Array'
      case NodeList:
        return 'NodeList'
      default:
        return 'null'
    }
  })()

  // 为数组或类数组时, 返回: index, value
  if (type === 'Array' || type === 'NodeList') {
    // 由于存在类数组NodeList, 所以不能直接调用every方法
    [].every.call(object, (v, i) => {
      let returnType = false
      return callback.call(v, i, v) === returnType ? returnType : true
    })
  } else if (type === 'Object') {
    // 为对象格式时,返回:key, value
    for (let i in object) {
      if (callback.call(object[i], i, object[i]) === false) {
        break
      }
    }
  }
}

// 数组降维
const _flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? _flatten(toFlatten) : toFlatten)
  }, [])
}

// 剔掉分页数组，不满足条件的字段
const _exceptPage = (obj) => {
  let data = JSON.parse(JSON.stringify(obj))

  if ('search_key' in data && data.search_key === '') {
    delete data.search_key
  }

  if ('time_value' in data && data.time_value === '') {
    delete data.time_value
  }

  if ('classify_type' in data && data.classify_type === '') {
    delete data.classify_type
  }

  if ('total' in data) {
    delete data.total
  }

  return data
}

export default {
  _ValidateThumb,
  _ValidateExt,
  _ValidateSize,
  _ValidateExtType,
  _PicUploads,
  _FileUploads,
  _StatusInt,
  _ReturnTime,
  _ReturnIsNull,
  _getStatusInt,
  _EditorUploads,
  _downloadType,
  _each,
  _flatten,
  _exceptPage,
  _baseUrl
}
