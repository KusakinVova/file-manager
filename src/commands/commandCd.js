import { chdir } from 'process';
import { printError } from '../services/log.service.js';

export async function commandCd(path) {
  try {
    chdir(`${path}`);
  } catch (error) {
    printError(`Operation failed! Message:\n ${error.message}`);
  }
}
