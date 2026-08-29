const arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(i);
}

console.log(arr);

const newArr = arr.find((item) => item === 10);

console.log(newArr);
