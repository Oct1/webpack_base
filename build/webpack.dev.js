const Webpack = require("webpack");
const webpackConfig = require("./webpack.config");
//用于合并webpack配置
const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(webpackConfig,{
    /**
     * 设置模式：
     * development开发环境
     * production生产模式 
     * 默认值为production 
     * 也可以设置为none
     * */
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    //配置开发服务器
    devServer: {
        //设置端口号
        port: 8080,
        //开启热更新
        hot: true,
        //告诉服务器内容来源
        contentBase: '../dist'
    },
    plugins: [new Webpack.HotModuleReplacementPlugin()]

})