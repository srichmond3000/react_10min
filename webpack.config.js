module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        port: 4000
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react']
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ]
    }
};