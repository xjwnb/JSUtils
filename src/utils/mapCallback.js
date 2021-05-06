/*
 * @Author: your name
 * @Date: 2021-04-30 15:06:09
 * @LastEditTime: 2021-04-30 16:49:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JSUtils\src\utils\mapCallback.js
 */

function mapCallback(fun, ...values) {
  if (typeof fun !== "function") return;
  let res = [];
  for (let i = 0, l = values.length; i < l; i++) {
    res.push([]);
  }
  for (let i = 0, l = values.length; i < l; i++) {
    for (let j = 0, len = values[i].length; j < len; j++) {
      res[i][j] = fun(values[i][j]);
    }
  }
  return res;
  // console.log(values);
  /* return values.reduce((pre, current) => {
    console.log(pre, current);
    if (pre !== []) {
      return [
        pre,
        current.map((item) => {
          return fun(item);
        }),
      ];
    } else {
      return current.map((item) => {
        return fun(item);
      });
    }
  }, []); */
}

export default mapCallback;
