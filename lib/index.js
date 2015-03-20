var escape = require('html-escape');


module.exports = function(name, attrs, body) {
  var s = '<' + name;

  if (attrs) {
    for (var k in attrs) {
      var v = attrs[k];
      if (v !== null && v !== undefined) {
        s += ' ' + k + '="' + escape(v) + '"';
      }
    }
  }

  if (body !== null && body !== undefined) {
    s += '>' + body + '</' + name + '>';
  } else {
    s += ' />';
  }

  return s;
};
