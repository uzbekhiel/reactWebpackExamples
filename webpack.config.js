const webpack = require('webpack')

module.exports = {
    entry: './ex/index.js',
    output:{
        path: __dirname + './public',
        filename: './bundle.js'
    },
    devServer: {
        port: 2018,
        contentBase: './public'
    }
}