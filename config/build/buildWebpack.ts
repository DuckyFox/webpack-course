import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {BuildOptions} from "./types/types";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, port, paths, isDev} = options;

    return {
        mode: mode  ?? "development",

        entry: paths.entry,

        devtool: isDev ? "inline-source-map" : undefined,

        devServer: isDev ? buildDevServer(options) : undefined,

        plugins: buildPlugins(options),

        module: {
            rules: buildLoaders(options)
        },

        resolve: buildResolvers(options),

        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },

        optimization: isDev ? {
            runtimeChunk: 'single',
        } : undefined,
    }
}