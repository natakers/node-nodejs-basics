import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
import { createWriteStream } from 'node:fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files/fileToWrite.txt');
  const stream = createWriteStream(pathWay);
  process.stdin.pipe(stream);
  process.stdin.resume();
};
write()