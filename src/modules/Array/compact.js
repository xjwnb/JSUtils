/*
 * @Author: your name
 * @Date: 2021-04-30 11:22:47
 * @LastEditTime: 2021-04-30 11:52:45
 * @LastEditors: Please set LastEditors
 * @Description: compact(array)
 * @FilePath: \JSUtils\src\modules\Array\compact.js
 */
import { isArray } from "../../utils/utils";

/**
 * 过滤出数组中的假值(false, "", null, undefined, NaN)元素
 * @param {Array} array
 */
function compact(array) {
  if (!isArray(array)) return;
  return array.filter((item) => Boolean(item));
}

export default compact;
