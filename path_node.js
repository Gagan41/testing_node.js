import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var pathObj = path.parse(__filename);
console.log(pathObj);

var dirOnj = path.parse(__dirname);
console.log(dirOnj);


//not the normal commonJS module it is ESmodule related which is the updated version  