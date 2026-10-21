// function increment(count: number): number {
//   count++;
//   return count;
// }

//

interface Ride {
  bike: "R6" | "Grom";
  miles: number;
}

function groupBy(
  rides: Ride[],
  getKey: (ride: Ride) => string,
): Record<string, Ride[]> {
  const groups: Record<string, Ride[]> = {};
  for (const ride of rides) {
    const key = getKey(ride);
    if (!groups[key]) groups[key] = [];
    groups[key].push(ride);
  }
  return groups;
}

const rides: Ride[] = [
  { bike: "R6", miles: 40 },
  { bike: "Grom", miles: 12 },
  { bike: "R6", miles: 25 },
];

console.log(groupBy(rides, (r) => r.bike));
