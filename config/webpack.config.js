const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                API_KEY: JSON.stringify(process.env.API_KEY)
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.resolve()
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png)$/,
                loader: 'url-loader'
            }
        ]
    }
};
