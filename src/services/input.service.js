import {
  COMMANDS,
  commandAdd,
  commandCat,
  commandCd,
  commandExit,
  commandLs,
  commandUp,
} from '../commands/index.js';
import { isPathExist, parserInput } from '../helpers/index.js';
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

    case COMMANDS.CD:
      (await isPathExist(firstArg)) && (await commandCd(firstArg));
      break;

    case COMMANDS.CAT:
      (await isPathExist(firstArg)) && commandCat(firstArg);
      break;

    case COMMANDS.ADD:
      commandAdd(firstArg);
      break;

    default:
      printError("I donn't know this command");
      break;
  }
  printCurrentDir();
};

export default inputConsole;
