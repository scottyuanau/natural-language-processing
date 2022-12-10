const path = require('path');
const webpack = require("webpack") ;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry:'./src/client/index.js',
  mode:'development',
  devtool:'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template:"./src/client/views/index.html",
    filename:"./index.html",
  }),
            new CleanWebpackPlugin({
              // Simulate the removal of files
              dry: true,
              // Write Logs to Console
              verbose: true,
              // Automatically remove all unused webpack assets on rebuild
              cleanStaleWebpackAssets: true,
              protectWebpackAssets: false
          }),

  
]
};