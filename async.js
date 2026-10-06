// async function helloWorld() {
//   return "Hello World";
// }

// console.log(helloWorld());

// const hello = await helloWorld();
// console.log(hello);

/* hello.then((val) => {
   console.log(val);
 });*/

// async function getBeans(count) {
//   if (count > 10) {
//     throw new Error("TOO MANY BEANSSS");
//   } else {
//     return `heres ${count} beans`;
//   }
// }

// async function main(order) {
//   try {
//     if (!order) {
//       throw new Error("order missiungggggg");
//     } else {
//       let myCoffee = await getBeans(order);
//       console.log(`heres your order: ${myCoffee}`);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// main(11);
// main(5);
// main();

// try {
//   let beans = await getBeans(5);
//   let grounds = await grind(beans);
//   console.log(grounds);
// } catch (err) {
//   console.log(err);
// }

// let beans = await getBeans(5);
// console.log(beans);

// takeOrder("latte")
//   .then((res) => brew(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// takeOrder("lattee")
//   .then((order) =>
//     brew(order).then((drink) => console.log(order, " -> ", drink)),
//   )
//   .catch((err) => console.log(err.message));

try {
  const beans = await getBeans(3);
  const grounds = await grind(beans);
  const drink = await brew(grounds);
  console.log(drink);
  console.log(drink);
} catch (err) {
  console.log(err.message);
}
