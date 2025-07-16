const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/paymentsdk.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "paymentsdk.js",
    publicPath: "/"
  },

  devtool: "eval-source-map",

  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
      // Add other loaders here if needed
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),

    // Fix "process is not defined" for browser builds
    new webpack.ProvidePlugin({
      process: "process/browser"
    }),

    new Dotenv({
      path: `.env.development`,
    }),
  ],

  resolve: {
    alias: {
      process: "process/browser"
    }
  }
};
