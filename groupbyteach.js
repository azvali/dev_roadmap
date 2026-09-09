const rides = [
  { bike: "R6", miles: 40 },
  { bike: "MT07", miles: 25 },
  { bike: "R6", miles: 60 },
];

function groupBy(array, cb) {
  return array.reduce((acc, curr) => {
    if (!acc[cb(curr)]) {
      acc[cb(curr)] = [];
    }
    acc[cb(curr)].push(curr);
    return acc;
  }, {});
}
