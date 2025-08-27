import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {

    const tsLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    // const scssLoader: webpack.RuleSetRule = {
    //     test: /\.(s[ac]ss|css)$/i,
    //     use: [
    //         options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 importLoaders: 1,
    //                 esModule: true,
    //                 modules: {
    //                     // включаем CSS Modules только для файлов *.module.scss
    //                     auto: /\.module\.\w+$/i,
    //                     localIdentName: options.isDev
    //                         ? '[path][name]__[local]--[hash:base64:5]'
    //                         : '[hash:base64:8]',
    //                 },
    //             },
    //         },
    //         'sass-loader',
    //     ],
    // };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // в случае прод сборки минимизируем классы
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                // выбираем лоадер
                loader: 'css-loader',
                options: {
                    modules: {
                        // определяем, воспринимать ли css как модуль, булевой проверкой наличия в пути module
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // в случае прод сборки минимизируем классы
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                        namedExport: false,
                    },
                },
            },
            'sass-loader',
        ],
    };

    return [
        tsLoader,
        scssLoader,
    ]
}
