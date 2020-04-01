const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueServerPlugin = require('vue-server-renderer/server-plugin') // 有了这个插件, 打包输出的会是json文件

const isDev = process.env.NODE_ENV === "development";

let config;

config = merge(baseConfig, {
  target: "node",
  devtool: "source-map",
  entry: path.join(__dirname, "../client/server-entry.js"),
  output: {
    libraryTarget: "commonjs2",
    filename: "server-entry.js",
    path: path.join(__dirname, "../server-build")
  },
  externals: Object.keys(require("../package.json").dependencies),
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          // MiniCssExtractPlugin.loader,
          // "style-loader",
          // "null-loader",
          "vue-style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "px2rem-loader",
            options: {
              remUnit: 75 //设计稿宽度/10
            }
          },
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.[chunkhash:8].css"
      // chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"' // ssr官方规定
    }),
    new VueServerPlugin()
  ]
});
module.exports = config;
