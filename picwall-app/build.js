const fs = require('fs');
const path = require('path');

const SRC = path.resolve(__dirname, '..');
const DEST = path.resolve(__dirname, 'www');

if (fs.existsSync(DEST)) fs.rmSync(DEST, { recursive: true });
fs.mkdirSync(DEST, { recursive: true });

const files = ['v87.html', 'manifest.json', 'sw.js', 'app-icon.svg'];
files.forEach(f => {
  const src = path.join(SRC, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DEST, f));
    console.log(`\u2705 ${f}`);
  } else {
    console.warn(`\u26a0\ufe0f ${f} \u4e0d\u5b58\u5728`);
  }
});

if (fs.existsSync(path.join(DEST, 'v87.html'))) {
  fs.copyFileSync(path.join(DEST, 'v87.html'), path.join(DEST, 'index.html'));
  console.log('\u2705 index.html (from v87.html)');
}

console.log('\n\u6253\u5305\u8d44\u6e90\u5df2\u751f\u6210\u5230 www/');