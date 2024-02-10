import { rm } from 'fs/promises';
import { printError, printMessage } from '../services/log.service.js';

export function commandRm(path) {
  rm(path, { recursive: true }).catch((error) =>
    printError(`Operation failed! Message:\n ${error.message}`),
  );
  printMessage({ text: 'File has been delete', colorText: 'green' });
}
