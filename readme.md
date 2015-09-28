# inline-style-loader
A webpack loader that imports a css file and converts it to be used as an inline style

[![Build Status](https://travis-ci.org/jbsouvestre/inline-style-loader.svg)](https://travis-ci.org/jbsouvestre/inline-style-loader)
[![Dependencies](https://david-dm.org/jbsouvestre/inline-style-loader.svg)](https://david-dm.org/jbsouvestre/inline-style-loader)

## Usage
```css
.selector {
    color: red;
    background-color: blue;
}
```

```js
element = document.createElement('div');
element.setAttribute('style', 
    require('raw!inline-style!./some-inline-style.css')['.selector']
);
```

[Check the demo for a more complete example](https://github.com/jbsouvestre/inline-style-loader/tree/master/demo)

## Limitations
Because the css is inlined, pseudo classes (`:hover`, `:active`, ...) can't be supported.  