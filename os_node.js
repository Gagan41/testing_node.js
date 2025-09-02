import os from 'node:os';

const totMem = os.totalmem();
console.log(totMem);

const freemem = os.freemem();
console.log(`Free Memory present is: ${freemem}`);
