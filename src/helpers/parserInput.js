export async function parserInput(data) {
  const inputData = data
    .split(' ')
    .map((el) => el.replace(/\*/g, ' '))
    .filter((e) => e !== '');

  const command = inputData.shift();
  const [firstArg, secondArg] = inputData;

  return { command, firstArg, secondArg };
}
