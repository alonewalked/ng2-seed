var path = require('path');
module.exports = {
    entry: {
        "vendor": path.resolve(__dirname, 'app/vendor.ts'),
        "main": path.resolve(__dirname, 'app/main.ts')
    },
    // Config for our build files
    output: {
        publicPath: '/build/',
        path: path.resolve(__dirname, 'build'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loaders: ['ts-loader'],
            exclude: /node_modules/
        },
        { test: /\.css$/, loader: "style!css" },
        { test: /\.html$/, loader: "html" }]
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html'] // <-- include .scss
    },
    devtool: 'source-map',
    plugins: [
        // new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),
        // // static assets
        // new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
        // // generating html
        // new HtmlWebpackPlugin({ template: 'src/index.html' }),
        // // replace
        // new DefinePlugin({
        //     'process.env': {
        //         'ENV': JSON.stringify(metadata.ENV),
        //         'NODE_ENV': JSON.stringify(metadata.ENV)
        //     }
        // }),
        // // jQuery, Tether
        // new ProvidePlugin({
        //     jQuery: 'jquery',
        //     $: 'jquery',
        //     jquery: 'jquery',
        //     "Tether": 'tether',
        //     "window.Tether": "tether"
        // })
    ]
};
