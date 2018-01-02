const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const projectRoot = path.resolve(__dirname, '../');
const outputPath = path.join(projectRoot, 'dist');
const srcPath = path.join(projectRoot, 'src');

module.exports = {
    entry: {
        index: path.join(srcPath, 'index.js'),
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'rxjs', 'redux-observable']
    },
    output: {
        path: outputPath,
        filename: '[name].bundle.[hash].js'
    },
    module: {
        rules: [{
            test: /.js$/,
            use: [
                "babel-loader",
            ],
            include: srcPath
        },
        {
            test: /\.(gif|png|jpe?g)$/,
            use: [{
                loader: "file-loader",
                options: {
                    limit: 8192
                }
            }]
        },
        {
            test: /\.(ttf|eot|svg|woff)(\?(\w|#)*)?$/,
            use: [{
                loader: "file-loader",
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(srcPath, "index.html"),
            name: "index",
            filename: "index.html",
            inject: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].bundle.js'
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ]
}