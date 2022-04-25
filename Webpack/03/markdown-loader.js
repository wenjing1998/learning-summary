// 1.引入将 markdown 解析为 html 的模块 marked；
const marked = require('marked');
// console.log('marked', marked);

// commonjs 导入导出方式
module.exports = source => {
  // 加载到的模块内容
  console.log('source', source);
  // 返回值就是最终被打包的内容，必须为 js 代码
  // return "console.log('hello markdown loader')";

  // 2.使用 marked 模块将 md 文件转为 html 字符串；
  const html = marked.parse(source);
  console.log('html', html);
  return html;

  // 3.将 html 字符串使用 JSON.stringify 转译；
  // 4.使用 ES module 的方式（export default）导出；
  // const code = `module.exports = ${JSON.stringify(html)}`;
  // const code = `export default ${JSON.stringify(html)}`;
  // const code = `export default ${JSON.stringify(source)}`;

  // return code;
}
