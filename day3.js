const data = require('./day3data');
console.log(data);

// const line1 = data.line1;
// const line2 = data.line2;

// let point1 = [[0, 0]];
// let point2 = [[0, 0]];

// const plusPoint = (direction, position) => {
//   let size = drection.substring(1);
//   let value = parseInt(size);
//   switch (direction[0]) {
//     case 'U':
//       return [
//         position[position.length - 1][0],
//         position[position.length - 1][1] + value,
//       ];
//       break;
//     case 'D':
//       return [
//         position[position.length - 1][0],
//         position[position.length - 1][1] - value,
//       ];
//       break;
//     case 'L':
//       return [
//         position[position.length - 1][0] - value,
//         position[position.length - 1][1],
//       ];
//       break;
//     case 'R':
//       return [
//         position[position.length - 1][0] + value,
//         position[position.length - 1][1],
//       ];
//       break;
//   }
// };
// const part1 = (line1, line2, point1, point2) => {
//   for (let i = 0; i < line1.length; i++) {
//     console.log(line1[0]);

//     point1.push(plusPoint(line1[i], point1));
//   }
//   for (let j = 0; i < line2.length; j++) {
//     point2.push(plusPoint(line2[j], point2));
//   }
//   console.log(point1);
//   console.log(point2);
// };
// part1(line1, line2, point1, point2);
