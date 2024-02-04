import { createInterface } from 'readline';
import { stdin as input, stdout as output } from 'node:process';
import { printGoodbye, printGreet } from './messages/index.js';
import inputConsole from './services/input.service.js';

const readline = createInterface({ input, output });

function app() {
  printGreet();

  readline.on('line', inputConsole);

  readline.on('close', printGoodbye);
}

export default app;
