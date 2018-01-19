var config = {
    entry: './main.js',
    output: {
        path:'/',
        filename: 'bundle.js',
    },
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
module.exports = config;