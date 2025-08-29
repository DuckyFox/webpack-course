import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

export function buildPlugins(options:BuildOptions):webpack.WebpackPluginInstance[] {

    const plugins:webpack.WebpackPluginInstance[] = [
        new htmlWebpackPlugin({
            title: "Webpack Application",
            template: options.paths.template,
        }),
    ]

    if (options.isDev) {
        plugins.push(new webpack.ProgressPlugin())
    } else {
        plugins.push( new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}