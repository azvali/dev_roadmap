function createAccount(initbalance) {
  let bal = initbalance;

  function deposit(amount) {
    bal += amount;
    return bal;
  }

  function withdraw(amount) {
    if (bal > amount) {
      bal -= amount;
    } else {
      return "Failed to withdraw";
    }
  }

  function getBalance() {
    return bal;
  }
  return { deposit: deposit, withdraw: withdraw, getBalance: getBalance };
}

function once(fn) {
  let ran = false;
  let res = null;

  return () => {
    if (!ran) {
      res = fn();
      ran = true;
      return res;
    } else {
      return res;
    }
  };
}

function memorize(fn) {
  let map = {};

  return (args) => {
    if (args in map) {
      return map[args];
    } else {
      map[args] = fn(args);
      return map[args];
    }
  };
}

function makeAdder(x) {
  return (Amount) => {
    return Amount + x;
  };
}
