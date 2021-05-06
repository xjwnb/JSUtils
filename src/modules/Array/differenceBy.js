/*
 * @Author: your name
 * @Date: 2021-04-30 14:51:16
 * @LastEditTime: 2021-04-30 17:43:26
 * @LastEditors: Please set LastEditors
 * @Description: differenceBy(array, [values], [iteratee=_.identity])
 * @FilePath: \JSUtils\src\modules\Array\differenceBy.js
 */
import { isArray, last } from "../../utils/utils";
import difference from "./difference";
import mapCallback from "../../utils/mapCallback";
import diffIndex from "../../utils/diffIndex";

/**
 * 类似 difference ，多了一个 iteratee 函数，用来迭代前面两个数组来的。
 * @param {Array} array
 * @param {Array} values
 * @param {Function} iteratee
 */
function differenceBy(array, ...arrays) {
  if (!isArray(array)) return;
  if (!arrays) return array;
  let iteratee = last(arrays);
  arrays.pop();
  if (typeof iteratee !== "function") {
    iteratee = undefined;
    return difference(array, arrays);
  }
  let resArr = mapCallback(iteratee, array, ...arrays);
  // return difference(...resArr);
  let resIndex = diffIndex(...resArr);
  return resIndex.map(item => array[item]);
  // let resIndex = 
}


export default differenceBy;
