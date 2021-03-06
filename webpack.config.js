var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,

    entry: {index: './react/index.js', 
            about: './react/about.js', 
            contact: './react/contact.js', 
            paintings: './react/paintings.js'},

    output: {
        path: path.resolve('./assets/js'),
        filename: "[name]-build.js",
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }

        ],
    },

}
