import { type Configuration } from "webpack";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildOptions, BuildPath} from "./config/build/types/types";
import {BuildMode} from "./config/build/types/types";
import path from "node:path";

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env:EnvVariables):Configuration => {

    const paths:BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        template: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        config: path.resolve(__dirname, 'config'),
        public: path.resolve(__dirname, 'public'),
    }

    const options:BuildOptions = {
        mode: env.mode ?? 'development',
        port: env.port ?? 3000,
        paths: paths,
        isDev: env.mode === 'development',
    }

    console.log(env.mode)

    return buildWebpack(options)
}
