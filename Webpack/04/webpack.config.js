const path = require('path');
// 结构成员
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 绝大多数插件导出的都是一个类型

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// 拷贝
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// 自定义插件 - 去除注释
// const RemoveCommentsPlugin = require('./remove-comments-plugin');

// 自定义插件 - 展示打包文件列表
const ShowFileListPlugin = require('./show-fileList-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist-show-fileList-plugin'),
    filename: 'Webpack-04-src-index.bundle.js'
  },

  mode: 'none',

  // 插件
  plugins: [
    // 类型构建一个实例
    // new CleanWebpackPlugin ??? 使用类创建一个实例为啥还要加括号？？
    // new CleanWebpackPlugin(),
  
    // new HtmlWebpackPlugin({
    //   title: '测试 html-webpack-plugin 配置项',
    //   filename: 'template.html',
    //   meta: {
    //     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
    //   },
    //   template: 'src/template.html' // 默认为 'src/index.ejs'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     // 'src/test.png' // from 文件
    //     // {
    //     //   from: 'src/test.png', // 文件
    //     //   to: 'assets/images' // 指定输出文件路径
    //     // },
    //     {
    //       from: 'src/*',
    //       to: '[path][name].[contenthash][ext]' // 防止重名
    //     },
    //   ],
    //   options: {
    //     concurrency: 100 // 同一时间内资源请求的数量限制，默认 100
    //   }
    // }),
    // new RemoveCommentsPlugin() // 实例对象，typeof 值为 object
    new ShowFileListPlugin({
      size: 100
    })
  ]
};
