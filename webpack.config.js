//TODO refactor it with typescript
module.exports = {
    entry:  './src/client.ts',
    output: {
        filename: 'bundle.js'
    }
    ,
    resolve: {
        /**
         * @see https://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    }
    ,
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};