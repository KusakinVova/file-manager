import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { printError, printMessage } from '../services/log.service.js';

export async function commandCompress(firstArg, secondArg) {
  try {
    const zip = createBrotliCompress();
    const readableStream = createReadStream(firstArg);
    const writableStream = createWriteStream(secondArg);

    readableStream.pipe(zip).pipe(writableStream);
    printMessage({ text: 'File has been Zip', colorText: 'green' });
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
  }
}
