import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

// подключаем возможность работать с ts модулями, абсолютными путями и алиасами
export default function buildResolves(options: BuildOptions):ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}