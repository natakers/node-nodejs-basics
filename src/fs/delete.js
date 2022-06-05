import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files');
  fsPromises.access(`${pathWay}/fileToRemove.txt`, fs.R_OK).then(() =>{
      fsPromises.unlink(`${pathWay}/fileToRemove.txt`)
  }).catch(() => {
    console.error(new Error('FS operation failed'))
  })
};
// remove()