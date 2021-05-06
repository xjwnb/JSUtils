/*
 * @Author: your name
 * @Date: 2021-04-30 13:52:48
 * @LastEditTime: 2021-04-30 14:08:59
 * @LastEditors: Please set LastEditors
 * @Description: difference
 * @FilePath: \JSUtils\src\modules\Array\difference.js
 */
import { isArray } from "../../utils/utils";

/**
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * @param {Array} array1 
 * @param {Array|null} array2 
 */
function difference(array1, array2) {
  if (!isArray(array1)) return;
  if (!array2) return array1;
  let newArr1 = JSON.parse(JSON.stringify(array1));
  let newArr2 = JSON.parse(JSON.stringify(array2));
  let res = newArr2.reduce((pre, current) => {
    return pre.filter((item) => item !== current);
  }, newArr1);
  return res;
}


export default difference;