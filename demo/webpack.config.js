/*jshint node: true, strict: false*/
var entry = './demo.js',
    output = {
        path: __dirname,
        filename: 'dist.js'
    };

var autoprefixerOptions = '{browsers: ["last 2 version"]}';

var config = {
    debug: false,
    entry: entry,
    output: output,
    module: {
        loaders: [{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'raw!inline-style!autoprefixer?' + autoprefixerOptions + '!sass'
        }]

    }
};

module.exports = config;