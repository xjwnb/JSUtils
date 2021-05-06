/*
 * @Author: your name
 * @Date: 2021-04-30 11:55:43
 * @LastEditTime: 2021-04-30 13:53:49
 * @LastEditors: Please set LastEditors
 * @Description: concat
 * @FilePath: \JSUtils\src\modules\Array\concat.js
 */
import { arrayFrom, isArray } from "../../utils/utils";


/**
 * 创建一个新数组，将 array 与任何数组或值连接在一起
 * @param {Array} array 
 */
function concat(array) {
  if (!isArray(array)) return;
  let arr = JSON.parse(JSON.stringify(array));
  let args = arrayFrom(arguments);
  if (!isArray(args)) return;
  let newArr = args.splice(1);
  let res = [...arr];
  for (let i = 0, l = newArr.length; i < l; i++) {
    if (isArray(newArr[i])) {
      res.push(...newArr[i]);
    } else {
      res.push(newArr[i]);
    }
  }
  return res;
}

export default concat;
