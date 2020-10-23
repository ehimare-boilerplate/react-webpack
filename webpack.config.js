// We require Node's path module in order to work with file and directory
const path = require('path');

//  Export an object using Node's module.exports. It contains the entry and output keys.
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },

    // Add a new key called module where webpack determines which loader to use
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },

    // The devServer key is made for webpack-dev-sever to serve files from our public dir
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
