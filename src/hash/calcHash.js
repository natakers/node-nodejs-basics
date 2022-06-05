import crypto from 'crypto';
import fsPromises from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files');
  fsPromises.readFile(`${pathWay}/fileToCalculateHashFor.txt`).then((res) => {
    const cr = crypto.createHash('sha256').update(""+res).digest('hex');
    console.log(cr);
  })
};
calculateHash()