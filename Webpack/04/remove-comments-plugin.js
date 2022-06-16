class RemoveCommentsPlugin {
  apply(compiler) {
    // console.log('RemoveCommentsPlugin apply');
    // console.log('compiler', compiler); // 此次构建所有的配置信息

    // 在什么时机执行 | 把任务放到哪个钩子上
    compiler.hooks.emit.tap('remove-comments-plugin', compilation => {
      // console.log('compilation', compilation); // 此次运行打包的上下文（打包结果）
      // console.log('compilation.assets', compilation.assets); // assets: 即将要写入输出目录文件的资源文件信息

      for (const filename in compilation?.assets) {
        // console.log('file', file);
        // console.log('compilation?.assets[file]', compilation?.assets[file]);

        // js 文件
        if ((/\.js$/).test(filename)) {
          // source 方法获取文件内容
          const content = compilation.assets[filename].source();
          // console.log('content', content);

          // 将文件内容的注释使用 正则替换的方式 去除注释（/******/）
          const regex = /\/\*{2,}\/\s?/g;
          const noComments = content.replace(regex, '');
          // console.log('noComments', noComments);

          // 复写（覆盖）内容
          compilation.assets[filename] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }

      // return true to emit the output, otherwise false
      return true;
    });
  }
}

module.exports = RemoveCommentsPlugin;
