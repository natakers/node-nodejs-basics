import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
// import { constants } from 'fs/constants';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files');
  const pathCopy = path.join(__dirname, 'files_copy');
    fsPromises.access(pathWay, fs.F_OK).then(() => {
      fsPromises.access(pathCopy, fs.F_OK).then(() => console.error(new Error('FS operation failed'))).catch(() => {
        fsPromises.mkdir(pathCopy)
        fsPromises.readdir (pathWay).then((res) => {
          res.forEach(file => {
            fsPromises.access(`${pathWay}/${file}`, fs.F_OK).then(() => {
              fsPromises.copyFile(`${pathWay}/${file}`, `${pathCopy}/${file}`)
            })
          })
        })
      })
    }).catch(() => {
      console.error(new Error('FS operation failed'))
    })
};
// copy()