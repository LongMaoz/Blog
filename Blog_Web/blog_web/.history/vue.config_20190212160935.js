// vue.config.js
module.exports = {
    // vue.config.js
    //多页面配置
    pages: {
        index: {
            // page 的入口
            entry: 'src/access/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
        },
        home:{
            // page 的入口
            entry: 'src/access/home.js',
            // 模板来源
            template: 'public/home.html',
            // 在 dist/index.html 的输出
            filename: 'home.html',
        }
    },
    // 它支持webPack-dev-server的所有选项
    devServer: {
        host: "localhost",
        port: 9031, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        /* disableHostCheck: true */
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        // 配置多个代理
        /*  proxy: {
             "/api": {
                 target: "<url>",
                 ws: true,
                 changeOrigin: true
             },
             "/foo": {
                 target: "<other_url>"
             }
         } */
    }
}