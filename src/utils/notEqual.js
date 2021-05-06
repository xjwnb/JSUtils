/*
 * @Author: your name
 * @Date: 2021-04-30 17:15:17
 * @LastEditTime: 2021-04-30 17:33:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSUtils\src\utils\equal.js
 */

/**
 * 通过两个数组的值返回第一个数组参数中除与第二个数组参数相同外的不同元素
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function notEqual(arr1, arr2) {
  // console.log(arr1, arr2);
  let newArr1 = JSON.parse(JSON.stringify(arr1));
  let newArr2 = JSON.parse(JSON.stringify(arr2));
  console.log(newArr1, newArr2);
  return newArr2.reduce((pre, current) => {
    return pre.filter(
      (item) => JSON.stringify(item) !== JSON.stringify(current)
    );
  }, newArr1);
}
