/*
+-----------------------------------------------------------------------------------------------------------------------
| Author: 植成樑 <atzcl0310@gmail.com>  Blog：https://www.zcloop.com
+-----------------------------------------------------------------------------------------------------------------------
| 引入组建所需的 Lodash 方法
|
*/

import * as _ from 'lodash';

// import {
//   clone,
//   cloneDeep,
//   debounce,
//   throttle,
//   find,
//   values,
//   size,
//   pick,
//   isEmpty,
//   isFunction,
//   isArray,
//   isDate,
//   isObject,
//   isString,
//   isNumber,
//   toArray,
//   toString,
//   has,
//   hasIn,
//   eq,
//   isEqual,
//   forEach,
//   xor,
//   camelCase,
//   kebabCase,
//   truncate,
//   startCase,
//   snakeCase,
// } from 'lodash';

// // 导出
// export default {
//   clone,
//   cloneDeep,
//   debounce,
//   throttle,
//   find,
//   values,
//   size,
//   pick,
//   isEmpty,
//   isFunction,
//   isArray,
//   isDate,
//   isObject,
//   isString,
//   isNumber,
//   toArray,
//   toString,
//   has,
//   hasIn,
//   eq,
//   isEqual,
//   forEach,
//   xor,
//   camelCase,
//   kebabCase,
//   truncate,
//   startCase,
//   snakeCase,
// };
export default {
  clone: _.clone, // 创建一个 value 的浅拷贝
  cloneDeep: _.cloneDeep, // 深拷贝
  debounce: _.debounce, // 创建一个 debounced（防抖动）函数
  throttle: _.throttle, // 创建一个节流函数
  find: _.find, // 遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。
  values: _.values, // 创建 object 自身可枚举属性的值为数组。
  size: _.size, // 返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
  pick: _.pick, // 创建一个从 object 中选中的属性的对象。
  isEmpty: _.isEmpty, // 检查 value 是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器
  isFunction: _.isFunction, // 检查 value 是否是 Function 对象。
  isArray: _.isArray, // 检查 value 是否是 Array 类对象。
  isDate: _.isDate, // 检查 value 是否是 Date 对象。
  isObject: _.isObject, // 检查 value 是否为 Object 的 language type
  isString: _.isString, // 检查 value 是否是原始字符串String或者对象。
  isNumber: _.isNumber, // 检查 value 是否是原始Number数值型 或者 对象。
  toArray: _.toArray, // 转换 value 为一个数组。
  toString: _.toString, // 转换 value 为字符串
  has: _.has, // 检查 path 是否是object对象的直接属性。
  hasIn: _.hasIn, // 检查 path 是否是object对象的直接或继承属性。
  eq: _.eq, // 执行 SameValueZero 比较两者的值，来确定它们是否相等。
  isEqual: _.isEqual, // 执行深比较来确定两者的值是否相等
  forEach: _.forEach, // 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出
  xor: _.xor, // 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
  camelCase: _.camelCase, // 转换字符串 string 为 驼峰风格 [aaBbbCcc]
  kebabCase: _.kebabCase, // 转换字符串 string 为 kebab case 风格[aaa-bbb-ccc]
  truncate: _.truncate, // 截断 string 字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."。
  startCase: _.startCase, // 转换字符串 string 为 驼峰风格 [AaaBbbCcc]
  snakeCase: _.snakeCase, // 转换字符串string为 snake case. : 'foo_bar'
};
