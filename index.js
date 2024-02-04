import { printLine } from './services/log.service.js';
import { getUserName } from './helpers/getUserName.js';

printLine({ line: `Welcome to the File Manager, ${getUserName()}`, colorText: 'green' });
