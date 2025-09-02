import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript';


export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: [{
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                },
            }],
    }

    const assetLoader = {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }

    const tsLoader = {
            exclude: /node_modules/,
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [options.isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                    transpileOnly: true,
                }
            }],

        }

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
        svgLoader,
        assetLoader,
        scssLoader,
    ]
}
