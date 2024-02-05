import { rename } from 'fs/promises';
import { printError, printMessage } from '../services/log.service.js';

export function commandRn(firstArg, secondArg) {
  rename(firstArg, secondArg).catch((error) =>
    printError(`Operation failed! Message: ${error.message}`),
  );
  printMessage({ text: 'File has been rename', colorText: 'green' });
}
