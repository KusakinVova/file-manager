import { cwd } from 'process';
import { readdir } from 'fs/promises';
import { printError } from '../services/log.service.js';

export async function commandLs() {
  const pathToFolder = cwd();
  await readdir(pathToFolder, { withFileTypes: true })
    .then((res) =>
      res
        .map((file) => {
          const Type = file.isFile() ? 'file' : 'directory';
          return {
            Name: file.name,
            Type,
          };
        })
        .sort((a, b) => (b.Name > a.Name ? 1 : -1))
        .sort((a, b) => (a.Type > b.Type ? 1 : -1)),
    )
    .then(console.table)
    .catch((error) => printError(`Operation failed! Message: ${error.message}`));
}
