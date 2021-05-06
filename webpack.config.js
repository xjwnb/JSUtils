/*
 * @Author: your name
 * @Date: 2021-04-30 10:30:37
 * @LastEditTime: 2021-04-30 10:46:50
 * @LastEditors: Please set LastEditors
 * @Description: Webpack 配置文件
 * @FilePath: \JSUtils\webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/index.js",
  // 出口
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ]
}