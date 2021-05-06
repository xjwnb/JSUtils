/*
 * @Author: your name
 * @Date: 2021-04-30 11:26:03
 * @LastEditTime: 2021-04-30 14:56:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSUtils\src\utils\utils.js
 */

const toString = Object.prototype.toString;

/**
 * 判断是否为数组
 * @param {Array} value
 */
export function isArray(value) {
  return Array.isArray
    ? Array.isArray(value)
    : toString.call(value) === "[object Array]";
}

/**
 * 判断是否为对象
 * @param {Object} obj
 */
export function isObject(obj) {
  return toString.call(obj) === "[object Object]";
}

/**
 * 判断是否为数字
 * @param {Number} value
 */
export function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

/**
 * 判断是否为 arguments
 * @param {Object} args
 */
export function isArguments(args) {
  return toString.call(args) === "[object Arguments]";
}

/**
 * 将类数组对象转变为数组
 * @param {Object} obj
 */
export function arrayFrom(obj) {
  if (!isObject(obj) && !isArguments(obj)) return;
  if (obj.length === undefined) return;
  if (Array.from) return Array.from(obj);
  let res = [];
  for (let i = 0, l = obj.length; i < l; i++) {
    res.push(obj[i]);
  }
  return res;
}

/**
 * 获取数组的最后一个元素
 * @param {Array} arr 
 */
export function last(arr) {
  if (!isArray(arr)) return;
  let length = arr.length;
  return length ? arr[arr.length - 1] : null;
}
