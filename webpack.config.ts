import path from "node:path";
import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";

export default (env:any):webpack.Configuration  => {
    const config:webpack.Configuration  = {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        plugins: [
            new htmlWebpackPlugin({
                title: "Webpack Application",
                template: path.resolve(__dirname, 'public/index.html'),
            }),
            new webpack.ProgressPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        }
    }
    return config
}
