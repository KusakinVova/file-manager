import { COMMANDS, commandExit, commandLs, commandUp } from '../commands/index.js';
import { parserInput } from '../helpers/parserInput.js';
import { printCurrentDir } from '../messages/index.js';
import { printError } from './log.service.js';

const inputConsole = async (data) => {
  const { command, firstArg, secondArg } = await parserInput(data);

  switch (command) {
    case COMMANDS.EXIT:
      commandExit();
      break;

    case COMMANDS.EXIT2:
      commandExit();
      break;

    case COMMANDS.UP:
      await commandUp();
      break;

    case COMMANDS.LS:
      await commandLs();
      break;

    default:
      printError("I donn't know this command");
      break;
  }
  printCurrentDir();
};

export default inputConsole;
