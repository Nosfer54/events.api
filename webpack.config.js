const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/f_sources.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
};