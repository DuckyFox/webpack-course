import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

// Настраиваем dev сервер
export function buildDevServer(options: BuildOptions): DevServerConfiguration{
    return {
        // порт запуска сервера
        port: options.port,
        // автоматическое открытие браузера
        open: true,
        // включаем вложенные маршруты
        historyApiFallback: true,
        // автоматическое обновление приложения при сохранении изменений
        hot: true,
    };
}