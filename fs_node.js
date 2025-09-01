import fs, { readFileSync } from 'node:fs';

const files = readFileSync('./hello.py', 'utf-8');
console.log(files);

fs.readFile('./hello.py', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(`File contents:\n${data}`);
});
