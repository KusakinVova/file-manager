import { printGoodbye } from '../messages/index.js';
export function commandExit() {
  printGoodbye();
  process.exit();
}
