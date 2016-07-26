var webpack = require('webpack');

module.exports = {
    entry: [
        './client/client.js'
    ],
    output: {
        path: require("path").resolve("./dist"),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080'
    },
    devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	 },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015', 'react-hmre']
            }
        }]
    }
}
