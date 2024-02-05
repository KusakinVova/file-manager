import { chdir } from 'process';

export async function commandUp() {
  chdir('..');
}
