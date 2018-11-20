var path = require('path');

module.exports = {
        entry: ['babel-polyfill', 'whatwg-fetch','./js/index.js'],
            output: {
                filename: 'compiled.js',
                path: path.resolve(__dirname, 'dist')
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        };