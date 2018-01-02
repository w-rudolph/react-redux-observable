const webpack = require('webpack');
const path = require('path');
const CConfig = require('./common.config');
const projectRoot = path.resolve(__dirname, '../');
const outputPath = path.join(projectRoot, 'dist');

module.exports = {
    entry: CConfig.entry,
    output: CConfig.output,
    module: {
        rules: CConfig.module.rules.concat([
            {
                test: /\.css$/,
                use: [
                    "style-loader",
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
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
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
            },
        ])
    },
    plugins: CConfig.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('development') }
        })
    ]),
    devServer: {
        hot: true,
        inline: true,
        progress: true,
        port: 9090,
        contentBase: outputPath
    }
}