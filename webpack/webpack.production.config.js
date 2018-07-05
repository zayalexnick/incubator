const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge({
    mode: 'production',
    output: { filename: 'bundle.min.js' },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { 'NODE_ENV': '"production"' },
        }),
    ],
}, require(path.resolve(__dirname, 'webpack.base.config.js')));