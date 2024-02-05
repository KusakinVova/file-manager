export function printMessage({ text, colorText, colorBg }) {
  let textLine = '';
  const colors = {
    reset: '\x1b[0m',
    bg: {
      black: '\x1b[40m',
      red: '\x1b[41m',
      green: '\x1b[42m',
      yellow: '\x1b[43m',
      blue: '\x1b[44m',
      magenta: '\x1b[45m',
      cyan: '\x1b[46m',
      white: '\x1b[47m',
      gray: '\x1b[100m',
    },
    text: {
      black: '\x1b[30m',
      red: '\x1b[31m',
      green: '\x1b[32m',
      yellow: '\x1b[33m',
      blue: '\x1b[34m',
      magenta: '\x1b[35m',
      cyan: '\x1b[36m',
      white: '\x1b[37m',
      gray: '\x1b[90m',
    },
  };

  if (colorText && colors.text[colorText]) textLine = colors.text[colorText];
  if (colorBg && colors.bg[colorBg]) textLine += colors.bg[colorBg];
  if (colors.bg[colorBg] || colors.text[colorText]) textLine += text + colors.reset;
  else textLine += text;

  console.log(textLine);
}

export function printLine(params) {
  const text = '------------------------------------------------------';
  let colorText = undefined;
  let colorBg = undefined;
  if (params && params.color) colorText = params.color;
  if (params && params.bg) colorBg = params.bg;

  printMessage({ text, colorText, colorBg });
}

export function printError(errorMessage) {
  printMessage({ text: errorMessage, colorText: 'red' });
}
