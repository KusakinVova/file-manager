import { EOL, cpus, homedir, arch, userInfo } from 'os';
import { printError, printMessage } from '../services/log.service.js';

export async function commandOs(arg) {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;

    case '--cpus':
      console.table(
        cpus().map((el) => ({
          model: el.model,
          speed: Math.floor(el.speed / 100) / 10,
        })),
      );
      break;

    case '--homedir':
      printMessage({ text: homedir() });
      break;

    case '--username':
      printMessage({ text: userInfo().username });
      break;

    case '--architecture':
      printMessage({ text: arch() });
      break;

    default:
      printError('Invalid input, you should enter another flag');
      break;
  }
}
