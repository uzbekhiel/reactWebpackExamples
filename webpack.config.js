const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    mode:'development',
    entry: './ex/index.js',
    output:{
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 2018,
        contentBase: './public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "app.css"
        })
    ],
    module:{
        rules:[{
            test: /.js?$/,
            loader : 'babel-loader',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015','react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            use : [
                    MiniCssExtractPlugin.loader,
                    //'style-loader',
                    'css-loader',

            ]
        }]
    }
}