import { createReadStream } from 'fs';
import { printError, printLine, printMessage } from '../services/log.service.js';

export async function commandCat(path) {
  const readableStream = createReadStream(path, 'utf8');

  readableStream.on('data', (chunk) => {
    printLine();
    printMessage({ text: chunk });
    printLine();
  });
  readableStream.on('error', (error) => printError(`Operation failed! Message: ${error.message}`));
}
