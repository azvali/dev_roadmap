const rides = [
  { id: "a1", bike: "R6", miles: 42 },
  { id: "b2", bike: "Grom", miles: 18 },
];

function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  // you write this part

  const res = arr.map((ride) => ride[key]);

  return res;
}

console.log(pluck(rides, "miles")); // should print [ 42, 18 ]
console.log(pluck(rides, "bike")); // should print [ 'R6', 'Grom' ]
