import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
import { createReadStream } from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files/fileToRead.txt');
  const stream = createReadStream(pathWay);
  stream.pipe(process.stdout)
};
// read()