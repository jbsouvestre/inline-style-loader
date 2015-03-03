/*jshint strict: false*/

var inlineStyles = require('./inline.css');

var element = document.createElement('div');
element.setAttribute('style', inlineStyles['.select']);
element.innerHTML = 'This is a test D:';
document.body.appendChild(element);




var button = document.createElement('button');
button.setAttribute('style', inlineStyles['button']);
button.innerHTML = 'Click me !';
document.body.appendChild(button);