const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'www', 'lib');
fs.mkdirSync(out, { recursive: true });
const files = [
  ['exceljs/dist/exceljs.min.js', 'exceljs.min.js'],
  ['html2canvas/dist/html2canvas.min.js', 'html2canvas.min.js'],
  ['jspdf/dist/jspdf.umd.min.js', 'jspdf.umd.min.js']
];
for (const [src, dst] of files) {
  const from = path.join(__dirname, '..', 'node_modules', src);
  if (!fs.existsSync(from)) { console.error('Missing: ' + from + ' (run npm install first)'); process.exit(1); }
  fs.copyFileSync(from, path.join(out, dst));
  console.log('copied ' + dst);
}
