import Hmr from './hmr';

export default function() {
    console.log('test HMR');

    const input = document.createElement('input');
    document.body.appendChild(input);
};

module.hot.accept('./hmr', function() {
    console.log('HMR 模块更新了');
    // 此处可以拿到最新的 Hmr 模块，以及数据（例如用户在页面上输入的还没有保存到服务器的文本框内容）
    // console.log('Hmr', Hmr);
});
