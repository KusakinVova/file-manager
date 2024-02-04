import { argv } from 'node:process';

function getUserName() {
  const userArg = argv.find((arg) => arg.startsWith('--username='));
  const userName = userArg ? userArg.slice(11) : 'Anonymous';
  return userName;
}

export { getUserName };
