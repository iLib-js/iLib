var path = require('path');

module.exports = {
    entry: './lib/ilib-standard-wp.js',
    output: {
        filename: 'ilib-standard.js',
        path: path.resolve(__dirname, 'output/js')
    },
    module: {
        /*
        rules: [{
            test: /\.js$/, // Run the loader on all .js files
            exclude: /node_modules/, // ignore all files in the node_modules folder
            use: path.resolve('lib/ilib-data-loader');
        }]
        */
    }
};
