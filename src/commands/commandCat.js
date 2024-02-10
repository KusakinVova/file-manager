import { createReadStream } from 'fs';
import { printError, printLine, printMessage } from '../services/log.service.js';

export async function commandCat(path) {
  try {
    const readableStream = createReadStream(path, 'utf8');
    readableStream.on('data', (chunk) => {
      printLine();
      printMessage({ text: chunk });
      printLine();
    });
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
  }
}
