const path = require('path')

module.exports = (env) => {
    return {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
        }
    }   
}
