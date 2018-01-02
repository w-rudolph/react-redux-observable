const webpack = require('webpack');
const CConfig = require('./common.config');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: CConfig.entry,
    output: CConfig.output,
    module: {
        rules: CConfig.module.rules.concat([
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                config: {
                                    path: 'postcss.config.js'
                                }
                            }
                        }
                    ]
                }),

            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                config: {
                                    path: 'postcss.config.js'
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
        ])
    },
    plugins: CConfig.plugins.concat([
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),
    ])
}