import { COMMANDS } from '../commands.js';
import { parserInput } from '../helpers/parserInput.js';
import { printGoodbye } from '../messages/index.js';
import { printMessage } from './log.service.js';

const inputConsole = async (data) => {
  const { command, firstArg, secondArg } = await parserInput(data);

  switch (command) {
    case COMMANDS.EXIT:
      printGoodbye();
      process.exit();
      break;

    default:
      printMessage({ text: "I donn't know this command", colorText: 'red' });
      break;
  }
};

export default inputConsole;
