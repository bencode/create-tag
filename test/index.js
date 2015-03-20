var createTag = require('..');


describe('create-tag', function() {
  it('should create tag string', function() {
    createTag('span').should.equal('<span />');

    createTag('input', { type: 'text' })
        .should.equal('<input type="text" />');

    createTag('script', { src: 'js/main.js' }, '')
        .should.equal('<script src="js/main.js"></script>');

    createTag('link', { rel: 'stylesheet', href: 'css/main.css' })
        .should.equal('<link rel="stylesheet" href="css/main.css" />');

    createTag('span', null, 'hello').should.equal('<span>hello</span>');

    createTag('div', { class: null, style: 'font-size: 10px' })
        .should.equal('<div style="font-size: 10px" />');

    createTag('span', { 'data-value': '<>' })
        .should.equal('<span data-value="&lt;&gt;" />');
  });
});
