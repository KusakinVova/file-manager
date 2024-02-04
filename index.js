import { printMessage, printLine } from './services/log.service.js';
import { getUserName, getHomeDirectory } from './helpers/index.js';

printMessage({ text: `Welcome to the File Manager, ${getUserName()}!`, colorText: 'green' });
printMessage({ text: `You are currently in ${getHomeDirectory()}`, colorText: 'blue' });
printLine({ color: 'green' });
