/**
 * webpack核心配置
 */

const {
    resolve
} = require('path') // path模块
const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包html插件

console.log(process.env.NODE_ENV)

module.exports = {
    // entry: './src/index.js', // 入口
    entry: './src/index.js',


    output: { // 出口
        path: resolve(__dirname, 'dist'),
        filename: 'js/[name]_[hash:10].js',
        publicPath: './'
    },

    module: { // 模块
        rules: [{
                oneOf: [
                    {
                        test: /\.html$/,
                        loader: 'html-loader'
                    },
                ]
            },

        ]
    },

    plugins: [ // 插件
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],

    mode: 'development', // 模式
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 5001,
        open: true,
        openPage: 'index.html',
        publicPath: '/',
    }
}