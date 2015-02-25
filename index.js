/*jshint node: true, strict: false*/
var extractrules = /(\{)[^\}]+(\})/,
    stripSpecials = /\r?\n|\r/g,
    brackets = /[\{\}]/g;

module.exports = function(source) {
    if (this.cacheable) {
        this.cacheable();
    }
    var str = source.match(extractrules)[0]
        .replace(stripSpecials, '')
        .replace(brackets, '');
    return str;
};