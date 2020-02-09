const csv = require('csv');
const path = require('path');
const fs = require('fs');

function read(file, fn) {
  var fpath = path.join('data', file);
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
  return Promise.all(rdy);
};

load().then((rows) => fs.writeFileSync('data.json', JSON.stringify(rows)));
