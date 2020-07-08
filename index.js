let argument = '';
for (let k = 2; k < process.argv.length; k++) {
  argument = argument + process.argv[k];
}
const input = argument || '';

const encode = require('./encode')(input);
console.log(encode);

export default input;
