const fs = require('node:fs');
const path = require ('path');
const { stdin, stdout } = process;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin, 
  output: process.stdout,
});

const textPath = path.join(__dirname, 'text.txt');

const writeStream = fs.createWriteStream(textPath);

function ask() {
  rl.question('Have text?\n', (data) => {

    if(data === 'exit') {
      stdout.write('Bye-bye');
      process.exit();
    }

    writeStream.write(data + '\n');

    ask();
  });
}
ask();

process.on('SIGINT', () => {
  console.log('Bye-bye');
  process.exit();
});
