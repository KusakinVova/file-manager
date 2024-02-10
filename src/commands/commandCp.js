import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { printError, printMessage } from '../services/log.service.js';

export async function commandCp(pathFrom, pathTo) {
  try {
    const destinationPath = join(pathTo, basename(pathFrom));
    const readableStream = createReadStream(pathFrom, 'utf8');
    const writableStream = createWriteStream(destinationPath);
    readableStream.pipe(writableStream);
    printMessage({ text: 'File has been Copied', colorText: 'green' });
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
  }
}
