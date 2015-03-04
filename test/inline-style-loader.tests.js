/*jshint node: true, strict: false*/
/*globals describe, it*/
var fs = require('fs');
var assert = require('assert');
var inlineLoader = require('../');

var rawStyle = fs.readFileSync('test/spec.css', 'utf-8');
var inline = inlineLoader(rawStyle);

describe('inline-style', function() {
    it('should support single selecors', function() {
        assert.equal(inline['.selector-1'], 'color: blue');
        assert.equal(inline['.selector-2'], 'background: red');
    });

    it('should support multiple selectors', function() {
        assert.equal(inline['.selector-3'], 'outline: none');
        assert.equal(inline['.selector-3'], 'outline: none');
    });

    it('should support deep selectors', function() {
        assert.equal(inline['.long [selector=true]'], 'border: 1px solid red');
    });

    it('should support multiple rules', function() {
        assert.equal(inline['.multiple'], 'color: blue; border-color: red');
    });
});