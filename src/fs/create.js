import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
// import { constants } from 'fs/constants';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files/fresh.txt');
    fsPromises.access(pathWay, fs.R_OK).then(() => console.error(new Error('FS operation failed'))).catch(() => {
      fsPromises.open(pathWay, 'w')
      .then((result)=>{
        console.log(result);
      })
      .catch((error)=>{
        console.log(error);
      });
      fsPromises.writeFile(pathWay, "I am fresh and young")
      .then((result)=>{
        console.log(result);
      })
      .catch((error)=>{
        console.log(error);
      }); 
    })
};
// create()


