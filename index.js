/*jshint node: true, strict: false*/
var css = require('css');
var _ = require('lodash');
var util = require('util');

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

    _.each(stylesheet.rules, function(rule) {
        inline = '';

        if (rule.type === RULE) {
            inline = _.map(rule.declarations, function(declaration) {
                return util.format('%s: %s', declaration.property, declaration.value);
            }).join('; ');
        }

        _.each(rule.selectors, function(selector) {
            rules[selector] = inline;
        });
    });

    return rules;
};