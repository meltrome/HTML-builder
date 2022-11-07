const fs = require('node:fs');
const path = require('node:path');

const textPath = path.resolve('01-read-file/text.txt');

let stream = new fs.ReadStream(textPath, { encoding: 'utf-8' });

stream.on('readable', function() {
  let data;

  while ((data = this.read())) {
    console.log(data);
  }
});