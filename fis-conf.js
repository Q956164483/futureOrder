fis.match('::packager', {
  //spriter: fis.plugin('csssprites'),
    packager: fis.plugin('map', {
        '/dist/js/all.js': [
            '/dist/js/zepto.min.js',
            '/dist/js/zepto.touch.js',
            '/dist/js/zepto.gesture.password.js',
            '/dist/js/waterbubble.js',
            '/dist/js/artTemplate.js',
            '/dist/js/common.js',
        ]
    })
});
fis.match('*.{css,js,png,jpg}', {
  //useHash: true
});
/**
 * JS压缩
 */
fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});
/**
 * sass编译
 */
// fis.match('style.scss', {
//     rExt: '.css',
//     parser: fis.plugin('node-sass')
// });
/**
 * css压缩
 */
fis.match('*.css', {
  useSprite: false,
  optimizer: fis.plugin('clean-css')
});
/**
 * JS合并
 */
// fis.match('*.js', {
//     packTo: '/static/all.js'
// });

/**
 * png图标合并
 */
// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });