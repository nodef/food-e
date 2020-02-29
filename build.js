const csv = require('csv');
const path = require('path');
const fs = require('fs');
const os = require('os');

function read(file, fn) {
  var fpath = path.join('assets', file);
  if(!fs.existsSync(fpath)) return Promise.resolve();
  return new Promise((fres) => {
    var stream = fs.createReadStream(fpath).pipe(csv.parse({columns: true}));
    stream.on('data', fn);
    stream.on('end', fres);
  });
};

function convert(row) {
  var code = row['Code'];
  var names = row['Name(s)'];
  var color = (row['Colour']||'').replace('(', ', ').replace(')', '');
  var type = row['Purpose']!=null? row['Purpose']:`color (${color})`;
  var status = row['Status'].search(/Approved in (the EU|\d+)/)>=0? 'e ':'';
  status += row['Status'].search(/Approved in the US/)>=0? 'u ':'';
  status = status.trim();
  return {code, names, type, status};
};

function load() {
  var rdy = [], z = [];
  for(var i=100; i<=1000; i++)
    rdy.push(read(`e${i}.csv`, (row) => z.push(convert(row))));
  return Promise.all(rdy).then(() => z);
};

load().then((rows) => {
  var c = 'code,names,type,status'+os.EOL;
  var z = `const CORPUS = new Map([${os.EOL}`;
  rows.sort((a, b) => parseInt(a.code.substring(1), 10)-parseInt(b.code.substring(1), 10));
  for(var row of rows) {
    c += `${row.code},"${row.names}","${row.type}",${row.status}`+os.EOL;
    z += `  ["${row.code}", ${JSON.stringify(row)}],${os.EOL}`;
  }
  z += `]);${os.EOL}`;
  z += `module.exports = CORPUS;${os.EOL}`;
  fs.writeFileSync('index.csv', c);
  fs.writeFileSync('corpus.js', z);
});
