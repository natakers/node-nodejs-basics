// const path = require('path');
// const { release, version } = require('os');
// const { createServer: createServerHttp } = require('http');
// require('./files/c');
// console.log(require('./files/c'));
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import http from 'http';
import * as c from './files/c.js'
// console.log(c);
// const createServerHttp = http.createServer();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

// if (random > 0.5) {
//     unknownObject = require('./files/a.json');
// } else {
//     unknownObject = require('./files/b.json');
// }

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

// const createMyServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });

// module.exports = {
//     unknownObject,
//     createMyServer,
// };
// export default { unknownObject, createMyServer} ;
// export default createMyServer;


// Hello from c.js!
// Release 10.0.19044
// Version Windows 10 Pro
// Path segment separator is "\"
// Path to current file is C:\Users\Nata\Documents\GitHub\node-nodejs-basics\src\modules\cjsToEsm.cjs