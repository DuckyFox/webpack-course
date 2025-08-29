import path from 'node:path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        static: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    };

    const port = Number(env.mode) || 3000;
    const mode = env.mode || 'development';
    const isDev: boolean = mode === 'development';

    return buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: port,
    });
};
