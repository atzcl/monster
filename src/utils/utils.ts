/**
 * Created by atzcl on 2017/6/8.
 */
'use strict'

const _convertTime = (time) => {
  if (time <= 9) {
    return '0' + time
  }
  return time
}

/**
 * 生成随机字符串 @example1 生成2-10位随机串：randomWord(true, 2, 10) @example2 生成32位随机串：randomWord(false, 32)
 *
 * @param randomFlag
 * @param min
 * @param max
 */
const _randomWord = (randomFlag: boolean = true, min: number = 6, max: number = 8) => {
  let str = ''
  let range = min
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  for (let i = 0; i < range; i++) {
    let pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}

const _getFullYear = () => {
  let date = new Date()
  return date.getFullYear() + '/' + _convertTime(date.getMonth() + 1) + '/' + _convertTime(date.getDate())
}

const _getYesterdayFromDate = (value) => {
  let date = new Date(value)
  date.setDate(date.getDate() - 1)
  return date.getFullYear() + '/' + _convertTime(date.getMonth() + 1) + '/' + _convertTime(date.getDate())
}

export default {
  _convertTime,
  _randomWord,
  _getFullYear,
  _getYesterdayFromDate
}
