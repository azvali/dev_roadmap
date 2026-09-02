//map with reduce
function myMap(arr, cb) {
  return arr.reduce((acc, curr) => {
    acc.push(cb(curr));
    return acc;
  }, []);
}

//filter with reduce
function myFilter(arr, cb) {
  return arr.reduce((acc, curr) => {
    if (cb(curr)) acc.push(curr);
    return acc;
  }, []);
}

//find with reduce
function myFind(arr, cb) {
  return arr.reduce((acc, curr) => {
    if (!acc && cb(curr)) return curr;
    return acc;
  }, undefined);
}
