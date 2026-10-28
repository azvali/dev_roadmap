type Bike = "R6" | "Grom";

type Ride = {
  id: string;
  bike: Bike;
  miles: number;
};

const rides: Ride[] = [
  { id: "a", bike: "R6", miles: 42 },
  { id: "b", bike: "Grom", miles: 18 },
];

function pluck<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((ride) => ride[key]);
}

const miles = pluck(rides, "miles");
const bikes = pluck(rides, "bike");

pluck(rides, "color"); //should error
