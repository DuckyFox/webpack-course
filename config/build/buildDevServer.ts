import { type Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "./types/types";
import path from "node:path";

export function buildDevServer(options: BuildOptions):DevServerConfiguration {

    return {
        port: options.port || 3000,
        open: false,
        historyApiFallback: true,
        hot: true,
    }
}