const lunr = require('lunr');
const corpus = require('./corpus')

var index = lunr(function() {
  this.ref('code');
  this.field('code');
  this.field('names');
  this.field('type');
  this.field('status');
  for(var r of corpus.values())
    this.add({code: r.code, names: r.names, type: r.type, status: r.status.replace(/(\w)/g, 'status_$1')});
});
function foode(txt) {
  txt = txt.replace(/(^|\s+)e?\s*(\d\d\d+)\s*([a-z])?(\s+|$)/gi, ' e$2$3 ');
  var mats = index.search(txt), z = [];
  for(var mat of mats)
    z.push(corpus.get(mat.ref));
  return z;
};
foode.corpus = corpus;
module.exports = foode;
