import { createWriteStream } from 'fs';
import { printError } from '../services/log.service.js';

export function commandAdd(path) {
  const writableStream = createWriteStream(path);
  writableStream.close();
  writableStream.on('error', (error) => printError(`Operation failed! Message: ${error.message}`));
}
