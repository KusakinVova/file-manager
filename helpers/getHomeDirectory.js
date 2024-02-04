import { homedir } from 'os';
function getHomeDirectory() {
  return homedir();
}

export { getHomeDirectory };
