const arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(i);
}

console.log(arr);

// //sum
// const total = arr.reduce((acc, next) => acc + next);

// console.log(total);

// //max
// const total = arr.reduce((acc, next) => Math.max(acc, next));

// console.log(total);

// //min
// const total = arr.reduce((acc, next) => Math.min(acc, next));

// console.log(total);

//count
const total = arr.reduce((acc, next) => acc + 1, 0);

console.log(total);

//flatten
const arr2 = [[1, 2], [3], [4, 5]];
const flat = arr2.reduce((acc, cur) => acc.concat(cur), []);
console.log(flat);

let arr33 = [1, 2, 3];
let arr44 = [4, 5, 6];
console.log(arr33.concat(arr44));
