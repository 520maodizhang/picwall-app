// 生成多尺寸 PWA 图标
// 需要: npm install sharp
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const svg = fs.readFileSync(path.resolve(__dirname, '..', 'app-icon.svg'), 'utf-8');

const dest = path.resolve(__dirname, 'www', 'icons');
fs.mkdirSync(dest, { recursive: true });

sizes.forEach(s => {
  fs.writeFileSync(path.join(dest, `icon-${s}x${s}.svg`), svg);
  console.log(`\u2705 icon-${s}x${s}.svg`);
});

console.log('\n提示: 要生成真 PNG 图标，运行:');
console.log('  npm install sharp && node generate-png-icons.js');