import * as crypto from 'crypto';
import { createReadStream } from 'fs';
import { printError, printMessage } from '../services/log.service.js';

export async function commandHash(path) {
  const readStream = createReadStream(path);
  let data = '';

  readStream.on('data', (chunk) => {
    data += `${chunk}`;
  });

  readStream.on('end', () => {
    const hash = crypto.createHash('sha256').update(data.trimEnd()).digest('hex');
    printMessage({ text: `SHA256 hash for ${path}: ${hash}`, colorText: 'yellow' });
  });

  readStream.on('error', (error) => printError(`Operation failed! Message: ${error.message}`));
}
