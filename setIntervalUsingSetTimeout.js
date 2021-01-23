function setIntervalUsingSetTimeout(fn, interval, ...args) {
  let f = function () {
    fn(...args);
    setTimeout(f, interval, ...args);
  };
  f();
}

let fn = function () {
  console.log(1);
};
setIntervalUsingSetTimeout(fn, 1000);
