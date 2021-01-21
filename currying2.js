function add(...args1) {
  let fn = function (...args2) {
    return add(...args1, ...args2);
  };
  fn.sumOf = () => args1.reduce((a, b) => a + b);
  return fn;
}

console.log(add(2, 3, 4).sumOf());
console.log(add(2)(3, 4).sumOf());
console.log(add(2)(3)(4).sumOf());
console.log(add(2, 3)(4).sumOf());
