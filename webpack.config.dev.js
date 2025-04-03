// webpack.config.dev.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/paymentsdk.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "paymentsdk.js",
    publicPath: "/",
  },
  mode: "development", // Set mode to development
  devtool: "eval-source-map", // Enable source maps for easier debugging
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    compress: true,
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Add other rules if needed (images, fonts, etc.)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
