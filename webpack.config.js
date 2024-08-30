const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        './client/index.js',
    ],
    output: { 
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({title: 'Development', template : './index.html' })],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }],
                            ['@babel/preset-react', { targets: 'defaults' }],
                        ],
                        // plugins: [new HtmlWebpackPlugin('./index.html')],
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],  
            }
        ]
    },
//     devServer:{ // try to bring devServer down...
//         static:{
//             directory: path.resolve(__dirname, 'build'),
//             publicPath: '/build', //switch to /build
//         },
//         proxy:[
//             {
//             context: ['/api'],
//             target:'http://localhost:3000',
//             }
//         ],
//         //compress: true,
//         port: 8080,
// },
}
