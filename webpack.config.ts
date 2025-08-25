import path from "node:path";
import webpack from "webpack";
import htmlWebpackPlugin from "html-webpack-plugin";
import { type Configuration } from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";


type Mode = "development" | "production";

interface EnvVariables {
    mode: Mode;
    port: number;
}

export default (env:EnvVariables):Configuration => {

    const isDev = env.mode === "development"

    const config:Configuration  = {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? {
            static: './build',
            port: env.port || 3000,
            open: true,
        } : undefined,
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
        },
        optimization: isDev ? {
            runtimeChunk: 'single',
        } : undefined,
    }
    return config
}
