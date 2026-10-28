// // const rides = [
// //   { id: "a1", bike: "R6", miles: 42 },
// //   { id: "b2", bike: "Grom", miles: 18 },
// // ];

// // function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
// //   // you write this part

// //   const res = arr.map((ride) => ride[key]);

// //   return res;
// // }

// // console.log(pluck(rides, "miles")); // should print [ 42, 18 ]
// // console.log(pluck(rides, "bike")); // should print [ 'R6', 'Grom' ]

// // type Ride = { id: string; bike: string; miles: number; date: string };

// // type NewRideForm = Omit<Ride, 'id' | 'date'>

// const ride = { id: "a1", bike: "R6", miles: 42 };

// function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
//   // your code
//   return obj[key];
// }

// console.log(getField(ride, "miles")); // should print 42
// console.log(getField(ride, "bike")); // should print 'R6'

// type Bike = "R6" | "Grom" | "CBR";

// const rideCount: Record<Bike, number> = { R6: 12, Grom: 30, CBR: 5 };

// function makeBike(name: string, cc: number) {
//   return { name, cc, addedAt: new Date() };
// }

// type NewBike = ReturnType<typeof makeBike>;

// type Gear = { helmet: string; jacket: string; boots: string };

// type GearSlot = keyof Gear;

// //gear slot eq 'helmet' | 'jacket' | 'boots''

// type Gear = { helmet: string; size: number; dot: boolean };
// const gear: Gear = { helmet: "Shoei", size: 58, dot: true };

// // write getField here
// function getField<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// console.log(getField(gear, "size")); // should print 58'

type Gear = { helmet: string; size: number; dot: boolean };

const garage: Gear[] = [
  { helmet: "Shoei", size: 58, dot: true },
  { helmet: "Arai", size: 60, dot: true },
];

// write pluck here
function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((x) => x[key]);
}

console.log(pluck(garage, "helmet")); // should print [ 'Shoei', 'Arai' ]
