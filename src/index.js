/*
 * @Author: your name
 * @Date: 2021-04-30 09:43:11
 * @LastEditTime: 2021-04-30 18:02:13
 * @LastEditors: Please set LastEditors
 * @Description: 主文件
 * @FilePath: \JSUtils\index.js
 */
let _ = {};

// 模块文件
let modulesFiles = require.context("./modules", true, /\.js$/);

/**
 * 获取模块文件导出内容(value)和文件名为key并且赋值给对象 _[key] = value
 * @param {Function} modulesFiles
 */
function importModules(modulesFiles) {
  let keys = modulesFiles.keys();
  let reg = /[a-zA-Z]+\.js$/g;
  keys.forEach((item) => {
    let key = item.match(reg)[0].slice(0, -3);
    _[key] = modulesFiles(item).default;
  });
}

importModules(modulesFiles);

// 测试
console.log("_.chunk", _.chunk([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(
  "_.compact",
  _.compact([1, 2, 0, 3, "", false, 4, null, 5, undefined, 6, NaN, 7])
);
console.log("_.conncat", _.concat([1, 2, 3], 4, 5, 6, [[7], 8], 9));
console.log("_.difference", _.difference([1, 2, 3, 4, 5, 6, 7, 8], [2, 3, 5]));
console.log(
  "_.differenceBy",
  _.differenceBy([1.1, 2.4, 3.6], [2.2, 3, 6, 7.8], Math.floor)
);

export default _;
