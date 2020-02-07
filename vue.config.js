
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require('path');
const util = require('util');
const assetsDir = './static';
const isProduction = process.env.NODE_ENV === 'production';
// 需要gzip压缩的文件后缀



module.exports = {
    baseUrl: '/vue-pro-action/',
    devServer: {
        disableHostCheck: true,
        contentBase: path.join(__dirname, '.'),
    },
    assetsDir,
    // 本地开发环境在根目录，其他环境在/solution2/目录下
    productionSourceMap: false,
    configureWebpack: (config) => {
        let result = {
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                alias: {
                    '@': path.resolve(__dirname, 'src')
                }
            }
        };
       
        if (isProduction) {
            const prod = {
                output: {
                    filename: path.posix.join(assetsDir, 'js/[name].js?[contenthash]'),
                    chunkFilename: path.posix.join(assetsDir, 'js/[id].js?[contenthash]'),
                },
                optimization: {
                    minimizer: [
                        // 压缩css
                        new OptimizeCSSAssetsPlugin({
                            assetNameRegExp: /\.css/g
                        })
                    ],
                    // splitChunks: {
                    //     chunks: 'all',
                    //     // maxInitialRequests: 5,
                    //     cacheGroups: {
                    //         default: false,
                    //         vendors: {
                    //             test: /[\\/]node_modules[\\/]/,
                    //         }
                            
                    //     },
                    // },
                },
                plugins: []
            };
            
            Object.assign(result, prod);
        }
        
        return result;
    },
    css: {
        extract: isProduction,
        sourceMap: false,
    },
    chainWebpack: (config) => {
        // 加上vue-i18n-loader插件
        config.module
              .rule("i18n")
              .resourceQuery(/blockType=i18n/)
              .type('javascript/auto')
              .use("i18n")
              .loader("@kazupon/vue-i18n-loader")
              .end();
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');      

        if (isProduction) {

            config.plugin('extract-css')
                  .tap((args) => {
                    args[0] = {
                        filename: path.posix.join(assetsDir, 'css/[name].css?[contenthash:8]'),
                        chunkFilename: path.posix.join(assetsDir, 'css/[name].css?[contenthash:8]'),
                    };
                    return args;
                   })
                   .end();
          
        }
    },
};
