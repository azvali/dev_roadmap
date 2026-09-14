// call stack -> micro tasks -> macro tasks
setTimeout(() => {
  console.log("C");
}, 0);
Promise.resolve().then(() => {
  console.log("B");
});
console.log("A");

//will always print A B C
