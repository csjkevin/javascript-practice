let obj = {};
let input = document.getElementById("input");
let text = document.getElementById("text");

Object.defineProperty(obj, "text", {
  configurable: true,
  enumerable: true,
  get() {
    console.log("the data was got");
  },
  set(value) {
    input.value = value;
    text.innerText = value;
    console.log(`the data was set to ${value}`);
  },
});

input.addEventListener("keyup", function (e) {
  obj.text = e.target.value;
});
