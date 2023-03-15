// stage3: 立即执行函数 IIFE
(function() {
  // 私有作用域的成员变量
  var name = 'moduleB';

  // 私有作用域的成员方法
  function method1() {
    // 通过闭包的方式访问变量
    console.log(name + '#method1');
  }

  // 需要暴露给全局的对象
  window.moduleB = {
    method1: method1
  }
})();
