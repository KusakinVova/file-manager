import { getUserName, getHomeDirectory } from '../helpers/index.js';
import { printMessage, printLine } from '../services/log.service.js';

function printGoodbye() {
  printLine({ color: 'green' });
  printMessage({
    text: `Thank you for using File Manager, ${getUserName()}, , goodbye!`,
    colorText: 'green',
  });
}
function printGreet() {
  printMessage({ text: `Welcome to the File Manager, ${getUserName()}!`, colorText: 'green' });
  printMessage({ text: `You are currently in ${getHomeDirectory()}`, colorText: 'blue' });
  printLine({ color: 'green' });
}

export { printGoodbye, printGreet };
