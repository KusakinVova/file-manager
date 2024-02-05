import { createWriteStream } from 'fs';
import { printError, printMessage } from '../services/log.service.js';

export function commandAdd(path) {
  const writableStream = createWriteStream(path);
  writableStream.close();
  printMessage({ text: 'File has been Add', colorText: 'green' });
  writableStream.on('error', (error) => printError(`Operation failed! Message: ${error.message}`));
}
