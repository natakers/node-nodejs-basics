import * as fs from 'fs/promises';
import fsPromises from 'fs/promises';
import * as path from 'path';
import { createReadStream } from 'node:fs';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createGzip } from 'zlib';
export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathWay = path.join(__dirname, 'files');
    fsPromises.open(`${pathWay}/archive.gz`, 'w')
      const stream = createReadStream(`${pathWay}/fileToCompress.txt`)
      stream.pipe(createGzip())
      .pipe(createWriteStream(`${pathWay}/archive.gz`))
};
// compress()