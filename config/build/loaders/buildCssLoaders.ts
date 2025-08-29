import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Настраиваем лоадер css и scss
export function buildCssLoader(isDev: boolean){
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // в случае прод сборки минимизируем классы
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                // выбираем лоадер
                loader: 'css-loader',
                options: {
                    modules: {
                        // определяем, воспринимать ли css как модуль, булевой проверкой наличия в пути module
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // в случае прод сборки минимизируем классы
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                        namedExport: false,
                    },
                },
            },
            'sass-loader',
        ],
    };
}
