function add(...args1) {
  return function (...args2) {
    if (args2.length === 0) {
      return args1.reduce((a, b) => a + b);
    }
    return add(...args1, ...args2);
  };
}

console.log(add(2, 3, 4)());
console.log(add(2)(3, 4)());
console.log(add(2)(3)(4)());
console.log(add(2, 3)(4)());
