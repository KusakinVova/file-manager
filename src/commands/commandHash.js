import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import { printError, printMessage } from '../services/log.service.js';

export async function commandHash(path) {
  try {
    const readStream = createReadStream(path);
    let data = '';

    readStream.on('data', (chunk) => {
      data += `${chunk}`;
    });

    readStream.on('end', () => {
      const hash = crypto.createHash('sha256').update(data.trimEnd()).digest('hex');
      printMessage({ text: `SHA256 hash for ${path}: ${hash}`, colorText: 'yellow' });
    });
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
  }
}
