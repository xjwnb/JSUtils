/*
 * @Author: your name
 * @Date: 2021-04-30 17:38:51
 * @LastEditTime: 2021-04-30 18:04:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSUtils\src\utils\diffIndex.js
 */
import { isArray } from "./utils";

function diffIndex(array1, array2) {
  if (!isArray(array1)) return;
  if (!array2) return array1;
  let newArr1 = JSON.parse(JSON.stringify(array1));
  let newArr2 = JSON.parse(JSON.stringify(array2));
  let resIndex = [];
  let res = newArr2.reduce((pre, current) => {
    return pre.filter((item) => item !== current);
  }, newArr1);
  console.log(resIndex);
  return resIndex;
}

export default diffIndex;
