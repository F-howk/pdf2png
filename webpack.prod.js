/**
 * webpack核心配置
 */

const {
    resolve
} = require('path') // path模块


module.exports = {
    // entry: './src/index.js', // 入口
    entry: './src/pdf2png.js',


    output: { // 出口
        path: resolve(__dirname, 'dist'),
        filename: 'pdf2png.js',
        publicPath: './'
    },


    mode: 'production', // 模式
}