import { BuildOptions } from './types/config';
import webpack from 'webpack';
import buildLoaders from './buildLoader';
import buildResolves from './buildResolves';
import buildPlugins from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export default function buildWebpackConfig(options: BuildOptions):webpack.Configuration {

    const { paths, mode, isDev } = options;

    return {
        mode: mode,
        entry: {
            index: paths.entry,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths, options),
    };
}