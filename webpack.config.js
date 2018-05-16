const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
    const cacheBoosting = env.NODE_ENV === 'production'

    return {
        entry: ['babel-polyfill', './src/app.tsx'],
        output: {
            path: __dirname + '/dist/',
            publicPath: '/dist/',
            chunkFilename: cacheBoosting ? 'js/[name].[chunkhash].js' : 'js/[name].bundle.js',
            filename: cacheBoosting ? 'js/bundle-[hash:8].js' : 'js/bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.png', '.jpeg', '.jpg', '.svg', '.css'],
            modules: ['node_modules', 'src']
        },
        plugins: [
            new WebpackCleanupPlugin(),
            new HtmlWebpackPlugin({
                filename: __dirname + '/index.html',
                template: __dirname + '/src/app.html'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env.NODE_ENV)
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                children: true,
                async: true
            }),
            new UglifyJsPlugin(),
            new ExtractTextPlugin({
                filename: cacheBoosting ? 'css/styles-[hash:8].css' : 'css/styles.css',
                allChunks: true
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react']
                        }
                    }, {
                        loader: 'ts-loader'
                    }]
                }, {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }]
                    })
                }, {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                minimize: true,
                                modules: true,
                                localIdentName: '[name]--[local]--[hash:base64:5]'
                            }
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('postcss-short'),
                                        require('postcss-cssnext')
                                    ]
                                },
                                sourceMap: true
                            }
                        }, {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                data: '@import "src/common/styles/bicycle/common/variables";@import "src/common/styles/bicycle/common/mixins";',
                                includePaths: [
                                    path.resolve(__dirname, './src')
                                ]
                            }
                        }]
                    })
                }, {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[hash].[ext]'
                        }
                    }
                }, {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[hash].[ext]'
                    }
                }, {
                    test: /\.json$/,
                    use: {
                        loader: 'json-loader'
                    }
                }
            ]
        }
    }
}
