// 1、创建一个命名的 function 或者是一个 class；
class ShowFileListPlugin {
  // 用于接收参数
  constructor(options) {
    // console.log('创建了一个 RemoveConSolePlugin 实例');
    // console.log('options', options);
    this.options = options;
  }

  // 2、定义一个 apply 方法；（webpack 内部是通过 apply 方法调用钩子函数的）
  apply(compiler) {
    // console.log('compiler', compiler);

    // 3、指定一个生命周期钩子去挂载（异步）任务：
    compiler.hooks.emit.tapAsync('show-fileList-plugin', (compilation, callback) => {
      // console.log('compilation', compilation);
      // console.log('callback', callback);

      let fileList = '打包后文件内容长度超过 ' + this.options.size + ' 的文件列表: \n\n';

      // 4、操作 webpack 内部实例特定的数据；
      for (const filename in compilation.assets) {
        // console.log('filename', filename);

        const size = compilation.assets[filename].size();
        if (size > this.options.size) {
          fileList += '- ' + filename + ': ' + size + '\n';
        }
      }

      // 创建一个新的文件用于存放需要输出的信息
      compilation.assets['fileList.md'] = {
        source: () => fileList,
        size: () => fileList.length
      };

      // 5、在功能性代码完成之后调用 webpack 提供的回调；(某些生命周期钩子没有回调参数)
      callback && callback();
    });
  }
};

// 6、导出 function 或者 class（使用 CommonJs 规范）；
module.exports = ShowFileListPlugin;
