import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions, BuildPath } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildPlugins(paths: BuildPath, options: BuildOptions):webpack.WebpackPluginInstance[]{
    const plugins = [
        // плагин для работы с html
        new HtmlWebpackPlugin({
            title: 'Striker',
            filename: '[name].html',
            template: paths.html,
        }),
        // плагин для вывода в консоль прогресса сборки
        new webpack.ProgressPlugin({}),
        // плагин для сокращения html
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // плагин для объявления глобальных переменных окружения
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
        }),
    ];

    if (options.isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
