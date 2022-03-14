// Uncaught SyntaxError: Cannot use import statement outside a module
// 解决方式：在 html 文件中引入该模块的 script 标签上指定 type 属性为 module。
// 用于区分普通 js 脚本还是一个模块。
// 即声明：该文件使用 ES modules 模块化规范，可以使用 import 载入模块，使用 export default 导出模块。

import createElement from './heading.js';
const element = createElement();
document.body.appendChild(element);
