const { isArray } = require("util");

Array.prototype.equals = function (arr) {
  // 判断数组的长度
  if (this.length !== arr.length) {
    return false;
  } else {
    // 循环遍历数组的值进行比较
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== arr[i]) {
        return false;
      }
    }
    return true;
  }
};

let a = [1, 2, 3];
let b = [1, "2", 3];
let c = [1, 2, 3];
console.log(a.equals(b));
console.log(a.equals(c));
