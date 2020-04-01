const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const config = {
  mode: process.env.NODE_ENV || "production",
  target: "web", 
  entry: path.join(__dirname, "../client/index.js"),
  output: {
    filename: "bundle.[hash:8].js",
    path: path.join(__dirname, "../dist"),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 2,
              name: "resources/[path].[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = config;
