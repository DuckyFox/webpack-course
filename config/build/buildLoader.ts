import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';

// Основной файл настройки лоадеров
export default function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {

    // ts loader
    const typeScriptLoader:webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // игнорируем /node_modules/
        exclude: /node_modules/,
    };

    // css loader
    const cssLoader = buildCssLoader(options.isDev);

    return [
        typeScriptLoader,
        cssLoader,
    ];
}