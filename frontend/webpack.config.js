var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname,
    entry: [
        './static/js/main.js'
    ],
    output: {
        path: path.resolve('./static/dist/'),
        filename: "[name]-[hash].js"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    module: {
        rules: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader"})},
            {test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000'},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue-loader'},
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles-[contenthash].css"),
        new BundleTracker({filename: './webpack-stats.json'}),
    ]
};
