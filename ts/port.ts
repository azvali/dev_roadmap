
interface Counter{
    increment(): number;
    reset(): void;
}

function makeCounter(start: number): Counter {
  let count = start;
  return {
    increment() {
      count++;
      return count;
    },
    reset() {
      count = start;
    },
  };
}

const c = makeCounter(10);
console.log(c.increment());
console.log(c.increment());
c.reset();
console.log(c.increment());




function once(fn: () => void): () => void {
  let called = false;
  return function () {
    if (called) return;
    called = true;
    fn();
  };
}

const startBike = once(() => console.log("Engine started"));
startBike();
startBike();
startBike();