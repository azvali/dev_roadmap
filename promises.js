const pager = new Promise((resolve, reject) => {
  resolve("food rdy");
});

pager.then((value) => {
  console.log(value);
})