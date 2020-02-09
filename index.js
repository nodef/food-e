const lunr = require('lunr');
const corpus = require('./corpus')

var index = lunr(function() {
  this.ref('code');
  this.field('code');
  this.field('names');
  this.field('type');
  this.field('status');
  for(var row of corpus.values())
    this.add(row);
});
function foode(txt) {
  txt = txt.replace(/^e?\s*(\d\d\d+)\s*([a-z])?$/i, 'e$1$2');
  var mats = index.search(txt), z = [];
  for(var mat of mats)
    z.push(corpus.get(mat.ref));
  return z;
};
foode.corpus = corpus;
module.exports = foode;
