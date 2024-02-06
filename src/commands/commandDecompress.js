import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { printError, printMessage } from '../services/log.service.js';

export async function commandDecompress(firstArg, secondArg) {
  try {
    const unzip = createBrotliDecompress();

    const readableStream = createReadStream(firstArg);
    const writableStream = createWriteStream(secondArg);
    readableStream.pipe(unzip).pipe(writableStream);
    printMessage({ text: 'File has been Unzip', colorText: 'green' });
  } catch (error) {
    printError(`Operation failed! Message: \n${error.message}`);
  }
}
