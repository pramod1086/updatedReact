const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');


module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "index_bundle.js",

      //  path: path.join(__dirname, "/dist"),
        publicPath: '/',

      //  filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                // test: /\.js$/,
                test: /\.jsx?$/,

                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
              template: "./src/index.html"
        })
    ]
};
