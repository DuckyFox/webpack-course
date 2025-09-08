import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/types";
import buildBabelLoader from "./babel/buildBabelLoader";

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

    const babelLoader = buildBabelLoader(options)

    return [
        babelLoader,
        svgLoader,
        assetLoader,
        scssLoader,
    ]
}
