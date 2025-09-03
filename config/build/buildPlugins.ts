import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import copyWebpackPlugin from "copy-webpack-plugin";
import path from "node:path";


export function buildPlugins(options:BuildOptions):webpack.WebpackPluginInstance[] {

    const plugins:webpack.WebpackPluginInstance[] = [
        new htmlWebpackPlugin({
            title: "Webpack Application",
            template: options.paths.template,
            favicon: path.resolve(options.paths.public, "favicon.ico"),
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.mode === "development"),
        }),
        new ForkTsCheckerWebpackPlugin(),
        new copyWebpackPlugin({
            patterns: [
                {from: path.resolve(options.paths.public, "locales"), to: path.resolve(options.paths.output, "locales")},
            ]
        })
    ]

    if (options.isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }
    if (!options.isDev) {
        plugins.push( new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
        plugins.push(new BundleAnalyzerPlugin())
    }

    return plugins
}