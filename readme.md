# inline-style-loader
a webpack loader that imports a css file and converts it to be used as an inline style

## Usage
```
.any {
    color: red;
    background-color: blue;
}
```

```
element = document.createElement('div');
element.setAttribute('style', 
    require('raw!inline-style!./some-inline-style.css')
);
```