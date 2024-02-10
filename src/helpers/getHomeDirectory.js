import { homedir } from 'os';
import { chdir } from 'process';

function getHomeDirectory() {
  const homeDirectory = homedir();
  chdir(homeDirectory);
  return homeDirectory;
}

export { getHomeDirectory };
