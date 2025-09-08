import {removeDataTestIdBabelPlugin} from "./removeDataTestIdBabelPlugin";
import {BuildOptions} from "../types/types";


const buildBabelLoader = (options: BuildOptions) => {
    const plugins = []

    if (options.mode === 'production') plugins.push([removeDataTestIdBabelPlugin, {props: ['data-testid']}]);

    return {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                plugins: plugins
            }
        }
    }
}

export default buildBabelLoader