const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'index.js'),
        plugins: [
            new htmlWebpackPlugin({
                title: "Webpack Application",
                template: path.resolve(__dirname, 'public/index.html'),
            }),
            new webpack.ProgressPlugin(),
        ],
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        }
    }   
}
