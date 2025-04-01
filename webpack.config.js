const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
require('dotenv').config();


module.exports = {
    entry: "./src/paymentsdk.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "paymentsdk.js",
        publicPath: "/",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"], // For SCSS files
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                type: "asset",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new Dotenv()
    ],
    devServer: {
        static: path.resolve(__dirname, "dist"), // Serve static files from "dist"
        open: true,
        compress: true,
        port: 8082, // Change if needed
        hot: true,
    },
};
