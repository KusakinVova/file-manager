import { createWriteStream } from 'fs';
import { printError, printMessage } from '../services/log.service.js';

export function commandAdd(path) {
  try {
    const writableStream = createWriteStream(path);
    writableStream.close();
    printMessage({ text: 'File has been Add', colorText: 'green' });
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
  }
}
