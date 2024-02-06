import { createReadStream, createWriteStream } from 'fs';
import { basename, join } from 'path';
import { printError } from '../services/log.service.js';

export async function commandCp(pathFrom, pathTo) {
  const destinationPath = join(pathTo, basename(pathFrom));
  const readableStream = createReadStream(pathFrom, 'utf8');
  readableStream.on('error', (error) => printError(`Operation failed! Message: ${error.message}`));

  const writableStream = createWriteStream(destinationPath);
  writableStream.on('error', (error) => printError(`Operation failed! Message: ${error.message}`));

  readableStream.pipe(writableStream);
  printMessage({ text: 'File has been Copied', colorText: 'green' });
}
