//整理路径
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
  // module: 'development',//开发模式
  mode: 'development', 
  devtool: 'source-map',

  entry: {
    index: './example/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js',
    publicPath: '/'
  },
  devServer: {
    static: [
      path.resolve(__dirname, 'example/public'),
      path.resolve(__dirname, 'dist')
    ],
    port: 9000,
    host: 'localhost',
  },

  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react'],
      //       plugins: ['@babel/plugin-proposal-class-properties']
      //     }
      //   }
      // }
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          //从后往前执行
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'example/public/index.html'),
      filename: 'index.html',
      chunks:['index']
    })
  ],
}