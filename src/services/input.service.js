import {
  COMMANDS,
  commandAdd,
  commandCat,
  commandCd,
  commandCp,
  commandExit,
  commandLs,
  commandRm,
  commandRn,
  commandUp,
} from '../commands/index.js';
import { isPathExist, parserInput } from '../helpers/index.js';
import { printCurrentDir } from '../messages/index.js';
import { printError, printMessage } from './log.service.js';

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

    case COMMANDS.RN:
      (await isPathExist(firstArg)) && commandRn(firstArg, secondArg);
      break;

    case COMMANDS.RM:
      (await isPathExist(firstArg)) && commandRm(firstArg);
      break;

    case COMMANDS.CP:
      (await isPathExist(firstArg)) &&
        (await isPathExist(secondArg)) &&
        (await commandCp(firstArg, secondArg));
      break;

    case COMMANDS.MV:
      if ((await isPathExist(firstArg)) && (await isPathExist(secondArg))) {
        await commandCp(firstArg, secondArg);
        commandRm(firstArg);
        printMessage({ text: 'File has been Moved', colorText: 'green' });
      }
      break;

    default:
      printError("I donn't know this command");
      break;
  }
  printCurrentDir();
};

export default inputConsole;
