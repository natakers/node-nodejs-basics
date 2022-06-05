
import * as fs from 'fs/promises';
import Transform from "stream";
import { createWriteStream } from 'node:fs';
import { createReadStream } from 'node:fs';

export const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const str = (chunk.toString().split('').reverse().join(""))
      // return c
      callback(null, str);
    },
  });
    process.stdin.pipe(reverse).pipe(process.stdout);
  process.stdin.resume();

};
transform()
