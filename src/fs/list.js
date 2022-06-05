import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
// import { constants } from 'fs/constants';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files');
  const pathCopy = path.join(__dirname, 'files_copy');
    fsPromises.access(pathWay, fs.F_OK).then(() => {
      fsPromises.readdir (pathWay).then((res) => {
        console.log(res);    
      })
    }).catch(() => {
      console.error(new Error('FS operation failed'))
    })


    // Write your code here 
};
// list()