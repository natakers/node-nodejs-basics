import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files');
  fsPromises.access(`${pathWay}/wrongFilename.txt`, fs.R_OK).then(() =>{
    fsPromises.access(`${pathWay}/properFilename.md`, fs.R_OK).then(() => console.error(new Error('FS operation failed'))).catch(() => {
      fsPromises.rename(`${pathWay}/wrongFilename.txt`, `${pathWay}/properFilename.md`)
    })
  }).catch(() => {
    console.error(new Error('FS operation failed'))
  })
};
// rename()