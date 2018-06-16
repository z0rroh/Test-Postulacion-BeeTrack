var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: [
      'react-hot-loader/patch',
      __dirname + '/src/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.(sass|scss)$/,
          use:['style-loader','css-loader', 'sass-loader']
        }
      ]
    },
    devServer: { inline: true },
    output: {
      filename: 'build.js',
      path: __dirname + "/dist",
      publicPath: "/"
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
    }
};
