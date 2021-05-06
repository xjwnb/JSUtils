/*
 * @Author: your name
 * @Date: 2021-04-30 09:47:31
 * @LastEditTime: 2021-04-30 11:42:18
 * @LastEditors: Please set LastEditors
 * @Description: chunk
 * @FilePath: \JSUtils\modules\Array\chunk.js
 */

import { isArray, isNumber } from "../../utils/utils";

/**
 * 将数组 array 拆分为多个 size 长度的数组区块，并且组合成一个新数组。
 * @param {Array} array 需要处理的数组
 * @param {Number} size 每个数组的长度
 * @returns {Array} result 返回值
 */
function chunk(array, size) {
  if (!isArray(array) || !isNumber(size)) return;
  let result = [];
  let resLength = Math.ceil(array.length / size);
  for (let i = 0; i < resLength; i++) {
    result.push([]);
  }
  array.forEach((item, index) => {
    let resIndex = Math.floor(index / size);
    result[resIndex].push(item);
  });
  return result;
}

export default chunk;
