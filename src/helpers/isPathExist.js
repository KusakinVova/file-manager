import { access } from 'fs/promises';
import { printError } from '../services/log.service.js';

export async function isPathExist(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
    return false;
  }
}
