import fs, { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const files = readFileSync('./hello.py', 'utf-8');
console.log(files);

fs.readFile('./hello.py', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(`File contents:\n${data}`);
});


//readfilesync is synchronous which does not need any promise but the readfile is asynchronous which requires promise in case if an error occurs

/*fs.readFileSync

Synchronous (blocking) → execution stops until the file is fully read.

Returns directly → either a Buffer or a string (if encoding is given).

Does not use promises or callbacks, because it doesn’t return asynchronously. */

try {
  const data = await readFile('./hello.py', 'utf-8');
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}

/**
 fs.readFile

Asynchronous (non-blocking) → execution continues while file is being read.

By default, it uses a callback (err, data).

If you want to use promises/async-await, you import it from fs/promises.
 */