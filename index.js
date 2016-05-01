/*jshint node: true, strict: false*/
var css = require('css');

var RULE = 'rule';

module.exports = function(source) {
    if (this.cacheable) {
        this.cacheable();
    }

    var stylesheet = css.parse(source).stylesheet;

    if (stylesheet.parsingErrors.length) {
        throw new Error('Parsing Error occured.');
    }

    var rules = {},
        inline;

    stylesheet.rules.forEach(function(rule) {
        inline = '';

        if (rule.type === RULE) {
            inline = rule.declarations.map(function(declaration) {
                return declaration.property + ': ' + declaration.value;
            }).join('; ');
        }

        if(rule.selectors) {
            rule.selectors.forEach(function(selector) {
                rules[selector] = inline;
            });
        }
    });

    return rules;
};