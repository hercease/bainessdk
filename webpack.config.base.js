// webpack.config.base.js
const path = require("path");

module.exports = {
  entry: "./src/paymentsdk.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "paymentsdk.js",
    publicPath: "/",
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
    ],
  },
};
