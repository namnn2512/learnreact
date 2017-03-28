var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        app: path.resolve(__dirname,'./src/layout.js')
    },
    output: {
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                //include: path.join(__dirname,'./mysql'),
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}