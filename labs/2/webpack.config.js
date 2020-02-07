const path = require('path');
const HtmlWebpackPluggin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'

    },
    plugins: [
        new HtmlWebpackPluggin({
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']       
             }
        ]
    }
};