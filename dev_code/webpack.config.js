const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        // index2:'./src/index2.js',
        // router:'./src/pages/router.js'
    },
    output: {
        filename: '[name].js',
        // path: path.resolve(__dirname, 'build'),
        path: path.resolve(__dirname, '..'),
    },
    devServer: {
        port: 5500,
        static: {
            directory: path.resolve(__dirname,'..')
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // extract css into separate file
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
                type: 'asset/resource',
            },
            {
                test: /knowlege\.json$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(),],
    },
    plugins: [
        // plugin que carga el html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
            // chunks:['index','router']
        }),
        // new HtmlWebpackPlugin({ 
        //     filename: 'index2.html',
        //     template: './src/index2.html',
        //     chunks:['index2']
        // }),
        // plugin que separa el css en un archivo
        new MiniCssExtractPlugin(),
        // plugin que optimiza el css
        new CssMinimizerPlugin(),
    ]


};