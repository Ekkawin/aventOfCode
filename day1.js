const data = require('./day1data');
let argument = '';
argument = argument + process.argv[2];
const input = argument || '';

const day1 = (e) => {
  console.log('hi', e);

  let calculate = Math.floor(e / 3);
  console.log(calculate);

  let result = calculate - 2;
  return result;
};
const part2 = (e) => {
  let remainFuel = day1(e);
  let totalFuelUse = remainFuel;
  while (remainFuel > 0) {
    remainFuel = day1(remainFuel);
    console.log('remain', remainFuel);
    if (remainFuel <= 0) {
      break;
    }

    totalFuelUse = totalFuelUse + remainFuel;
    console.log('Total', totalFuelUse);
  }
  return totalFuelUse;
};
let answer = 0;
for (let i = 0; i < data.length; i++) {
  answer = answer + part2(data[i]);
  console.log(`one stop ${i} ${answer}`);
}
console.log(answer);
