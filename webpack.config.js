const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        app: './js/app.js'
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        publicPath: '/',
        port: 9000,
        contentBase: path.join(process.cwd(), 'dist'),
        host: 'localhost',
        stats: 'minimal',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development'
};