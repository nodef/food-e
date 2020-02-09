const csv = require('csv');
const path = require('path');
const fs = require('fs');

function read(file) {
  var fpath = path.join('data', file), z = [];
  if(!fs.existsSync(fpath)) return Promise.resolve();
  return new Promise((fres) => {
    var stream = fs.createReadStream(fpath).pipe(csv.parse({columns: true}));
    stream.on('data', (row) => z.push(row));
    stream.on('end', () => fres(z));
  });
};
