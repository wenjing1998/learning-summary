// 该配置文件将会运行在 Node.js 环境下
// 所以将会使用 CommonJs 模块化规范语法
// require 函数载入模块
// module.exports 导出模块

// 可以直接使用 Node.js 内置模块
const path = require('path');

// 让配置文件支持智能提示
// 运行打包之前，还需要将此代码注释掉，因为 Node.js 环境中还不支持 ES modules 语法
// import { Configuration } from 'webpack';

/**
 * @type {Configuration}
 */
module.exports = {
  // 入口文件路径
  entry: './Webpack/02/src/index.js',

  // 输出文件
  output: {
    //  - configuration.output.path: The provided value "./Webpack/02/dist" is not an absolute path!
    // -> The output directory as **absolute path** (required).
    // 故需要载入 path 模块，用于创建一个绝对地址字符串
    // path: './Webpack/02/dist',
    path: path.resolve(__dirname, 'Webpack/02/dist'),
    filename: 'Webpack-02-src-index.bundle.js'
  },

  mode: 'none'
};
