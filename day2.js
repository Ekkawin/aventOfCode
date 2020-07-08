const data = require('./day2data');
const day1data = require('./day1data');

console.log(data[1] === 0);
console.log(data);

const part1 = (newvalue) => {
  let e = [...newvalue];
  for (i = 0; i < e.length; i = i + 4) {
    let index1 = e[i + 1];
    let index2 = e[i + 2];
    let index3 = e[i + 3];
    if (e[i] === 99) break;
    switch (e[i]) {
      case 1:
        let result = e[index1] + e[index2];
        e[index3] = result;
        break;
      case 2:
        let result2 = e[index1] * e[index2];
        e[index3] = result2;
        break;
    }
  }
  console.log(e[0]);
  console.log(newvalue[0]);

  return e[0];
};
const part2 = (data1) => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let value = data1;
      value[1] = i;
      value[2] = j;
      console.log(value);

      if (part1(value) == 19690720) {
        console.log(`value ${100 * i + j}`);

        return 'hi';
      }
    }
  }
  return 'not found';
};

console.log(part2(data));
