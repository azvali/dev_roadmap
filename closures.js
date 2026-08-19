// function counter() {
//   let count = 0;
//   return () => {
//     count++;
//     return count;
//   };
// }

// let x = counter();
// let b = counter();

// console.log(x(), x(), b());

// function makeCounter() {
//   let count = 0;
//   return function() {
//     return count++; //postfix
//   };
// }

// let counter3 = makeCounter();

// counter3();
// counter3();

// console.log( counter3() );

function makeAdder(x) {
  return (y) => {
    return y + x;
  };
}

const add5 = makeAdder(5);
console.log(add5(3)); // 8

console.log(add5(10)); // 15
