const foode = require('./');

// Parse text to boolean.
function boolean(str) {
  var fal = str.search(/(negati|never|refus|wrong|fal|off)|\b(f|n|0)\b/gi)<0? 0:1;
  var not = (str.match(/\b(nay|nah|no|dis|un|in)/gi)||[]).length & 1;
  return !(fal^not);
}

const E = process.env;
const OPTIONS = {
  help: false,
  silent: boolean(E['FOODE_SILENT']||'0'),
  text: '',
};
const STDIO = [0, 1, 2];
const ISTTY = process.stdout.isTTY;
const CRESET = ISTTY? '\x1b[0m':'';
const CTEXT1 = ISTTY? '\x1b[0;33m':'';
const CERROR = ISTTY? '\x1b[35m':'';



async function main(a) {
  var o = Object.assign({}, OPTIONS);
  for(var i=2, I=a.length; i<I;)
    i = options(o, a[i], a, i);
  if(o.help) return cp.execSync('less README.md', {cwd: process.cwd(), stdio: STDIO});
  var rows = foode(o.text);
  if(rows.length===0) return error(new Error('No such food additives'), o);
  for(var r of rows) {
    console.log(r.code+': '+r.names);
    console.log(CTEXT1+'.type: '+r.type+'; .status: '+r.status+CRESET);
    console.log();
  }
}

function options(o, k, a, i) {
  if(k==='--help') o.help = true;
  else if(k==='--silent') o.silent = true;
  else o.text = a[i];
  return i+1;
}

function error(err, o) {
  if(o.silent) return console.log(-1);
  console.error(`${CERROR}error:${CRESET}`, err.message);
}
if(require.main===module) main(process.argv);
