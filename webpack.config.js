//TODO refactor it with typescript
module.exports = {
    entry:  {
        app: './src/client.ts'
        ,
        vendor: [
            /**
             * All stuff which is necessary for Angular2
             */
            //'zone.js'
            'angular2/bundles/angular2-polyfills.js'
        ]
    },
    output: {
        filename: '[name].js'
    }
    ,
    resolve: {
        /**
         * @see https://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.es6']
    }
    ,
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
            ,
            {
                //TODO use .babelrc instead of query
                test: /\.es6$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};