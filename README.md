# create-tag

utility for creating tag string


```
$ npm install create-tag
```


```js
var createTag = require('create-tag');


createTag('span');
// <span />

createTag('input', { type: 'text' });
// <input type="text" />

createTag('script', { src: 'js/main.js' }, '');
// <script src="js/main.js"></script>

createTag('span', null, 'hello');
// <span>hello</span>

createTag('div', { class: null, style: 'font-size: 10px' }, 'Hello');
// <div style="font-size: 10px">Hello</div>

createTag('span', { 'data-value': '<>' });
// <span data-value="&lt;&gt;" />
```
