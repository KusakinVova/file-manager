import {
  COMMANDS,
  commandAdd,
  commandCat,
  commandCd,
  commandCompress,
  commandCp,
  commandDecompress,
  commandExit,
  commandHash,
  commandLs,
  commandOs,
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

    case COMMANDS.OS:
      commandOs(firstArg);
      break;

    case COMMANDS.HASH:
      (await isPathExist(firstArg)) && (await commandHash(firstArg));
      break;

    case COMMANDS.COMPRESS:
      (await isPathExist(firstArg)) && commandCompress(firstArg, secondArg);
      break;

    case COMMANDS.DECOMPRESS:
      (await isPathExist(firstArg)) && commandDecompress(firstArg, secondArg);
      break;

    default:
      printError("I donn't know this command");
      break;
  }
  printCurrentDir();
};

export default inputConsole;
