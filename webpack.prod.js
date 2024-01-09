//整理路径
const path = require('path');

const {VueLoaderPlugin} = require('vue-loader');
module.exports = {
  // module: 'development',//开发模式
  mode: 'production',//生产模式 
  devtool: 'source-map',

  entry: {
    index: './src/index.js',
    button:'./packages/button',
    aside:'./packages/aside',
    main:'./packages/main',
    header:'./packages/header',
    container:'./packages/container',
  },
  output: {
   //设置生成的文件名
    filename:'[name].js',
    //设置构建的组件库放在组件库的lib文件夹中
    path: path.resolve(__dirname, 'lib'),
    library:{
      //声明组件库的全局对象名称为PUI
      name:'PUI',
      //声明组件库的类型为umd，保证在任何模块场景都可以顺利加载
      type:'umd'
    },
    // publicPath: '/'

    //开启构建清理
    clean:true
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
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: [
      //     //从后往前执行
      //     {
      //       loader: 'style-loader',
      //     },
      //     {
      //       loader: 'css-loader',
      //     },
      //     {
      //       loader: 'sass-loader',
      //     }
      //   ]
      // },
    ]
  },

  //排除
  externals:['vue'],
  
  // resolve: {
  //   extensions: ['.vue']
  // },
  plugins: [
    new VueLoaderPlugin(),
  ],
}