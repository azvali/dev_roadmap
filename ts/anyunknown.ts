//const data: unknown = JSON.parse('"r6"');

// if (typeof data === "string") {
//   console.log(data.toUpperCase());
// }

// const data: unknown = JSON.parse('{"id":"a","bike":"R6","miles":42}');

// // if (
// //   typeof data === "object" &&
// //   data !== null &&
// //   "miles" in data &&
// //   typeof data.miles === "number"
// // ) {
// //   console.log(data.miles.toFixed(1));
// // }

// // function isStr(x: unknown): x is string {
// //   return typeof x === "string";
// // }

// type Bike = "R6" | "Grom";
// type Ride = { id: string; bike: Bike; miles: number };

// // function isRide(x: unknown): x is Ride {
// //   // 👉 your checks here
// //   return typeof x === 'object' && x !== null && 'id' in x && 'bike' in x && 'miles' in x && typeof x.bike === 'string' && typeof x.miles === 'string' && (x.bike === 'Grom' || x.bike === 'R6') && typeof x.miles === 'number' &&
// // }

// function isRide(x: unknown): x is Ride {
//   return (
//     typeof x === "object" &&
//     x !== null &&
//     "id" in x &&
//     "bike" in x &&
//     "miles" in x &&
//     (x.bike === "Grom" || x.bike === "R6") &&
//     typeof x.miles === "number" &&
//     x.miles >= 0
//   );
// }

// console.log(isRide({ id: "a", bike: "R6", miles: 42 })); // should be true
// console.log(isRide({ id: "a", bike: "R6", miles: "lots" })); // should be false
// console.log(isRide({ id: "a", bike: "Ninja", miles: 42 })); // should be false
// console.log(isRide(null)); // should be false

const saved =
  '[{"id":"a","bike":"R6","miles":42},{"id":"b","bike":"Grom","miles":18}]';

const rides: any = JSON.parse(saved);

console.log(rides);

let total = 0;
for (const r of rides) {
  total += r.mile;
}
console.log(`Total: ${total} mi`);


async function fetchJSON<T>(url: string): Promise<T> {
  // 👉 fetch the url, return the parsed JSON

  const response = await fetch(url);
  return response.json()
}
