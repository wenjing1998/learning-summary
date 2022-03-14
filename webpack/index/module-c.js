// stage4: IIFE 依赖参数
(function($) { // 通过参数明显表明这个模块的依赖
  var name = 'moduleC';

  function method1() {
    console.log(name + '#method1');
    $('body').animate({ margin: '20px' });
  }

  window.moduleC = {
    method1: method1
  }
})(jQuery)
