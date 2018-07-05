const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [ '@babel/polyfill', path.resolve(__dirname, '..', 'src', 'index.js') ],
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json' ],
        alias: {
            '~': path.resolve(__dirname, '..', 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/',
                    outputPath: 'assets/'
                }
            }
        ],
    },
    plugins: [
		new cleanPlugin(['../dist']),
        new htmlPlugin({
            template: path.resolve(__dirname, '..', 'src', 'index.html'),
            inject: 'body'
        })
    ]
};