// markdown-loader: 加载 md 文件资源（并不需要展示，因为 loader 就是用来处理资源加载问题的！！注意）
// webpack 运行在 node 环境，遵循 commonjs 的语法规范，即与 webpack.config.js 一样：require 导入模块；module.exports 导出；

// 2.引入可以将 markdown 解析为 html 的模块 marked；
const marked = require('marked');
// console.log('marked', marked);

// 1.确定参数和 return 值类型；
// 注意：方法不要写成箭头函数，因为 loader 内部的属性和方法，需要通过 this 进行调用。
module.exports = function(source) {
  // source 为目标文件内容的字符串值
  // console.log('source', source);

  // 3.使用 marked 模块将 md 文件内容转为 html 字符串；
  const html = marked.parse(source);
  // console.log('html', html);

  // 返回值必须是 buffer/string 类型的值
  // 注意：return 的字符串类型的值，应该是 js 代码字符串，此处是 html 字符串，因此 webpack 无法解析！！！提示还需要别的 loader 来处理这个 html 字符串
  return html;

  // 3.使用 export default（ESModule语法）或者 module.exports（commonjs语法，更推荐）导出字符串；
  // const jsCode = `export default ${html}`;
  // const jsCode = `module.exports = ${html}`;

  // 4.普通字符串可能存在特殊字符，还需要将 html 字符串使用 JSON.stringify 转译为标准的 json 格式字符串；
  // const jsCode = `export default ${JSON.stringify(html)}`;
  // const jsCode = `module.exports = ${JSON.stringify(html)}`;
  // console.log('jsCode', jsCode);

  // return jsCode;
};
