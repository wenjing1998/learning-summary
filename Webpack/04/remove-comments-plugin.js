class RemoveCommentsPlugin {
  apply(compiler) {
    // console.log('RemoveCommentsPlugin apply');
    // console.log('compiler', compiler); // 此次构建所有的配置信息

    // 在什么时机执行 | 把任务放到哪个钩子上
    compiler.hooks.emit.tap('remove-comments-plugin', compilation => {
      // console.log('compilation', compilation); // 此次运行打包的上下文（打包结果）
      // console.log('compilation.assets', compilation.assets); // assets: 即将要写入输出目录文件的资源文件信息

      for (const filename in compilation.assets) {
        // console.log('file', file);
        // console.log('compilation?.assets[file]', compilation?.assets[file]);

        // js 文件
        // if ((/\.js$/).test(filename)) {
        if (filename.endsWidth('.js')) {
          // source 方法获取文件内容
          const content = compilation.assets[filename].source();
          // console.log('content', content);

          // 将文件内容的注释使用 正则替换的方式 去除注释（/******/）
          const regex = /\/\*{2,}\/\s?/g;
          // replace 方法，若目标参数是 string，则只替换匹配到的第一个；若目标参数是正则表达式，若未指定 g 全局，则替换匹配到的第一个，若指定 g 全局，则替换全部（类似 replaceAll）。
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
