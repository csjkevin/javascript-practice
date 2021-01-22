// get something
var xhr = new XMLHttpRequest();
xhr.open("GET", "/api/test", "true");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

// post form data
var xhr = new XMLHttpRequest();
xhr.open("POST", "/api/test", "true");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send("firstName=Kevin&lastName=Chen");

// post json data
var xhr = new XMLHttpRequest();
xhr.open("POST", "/api/test", true);
xhr.setRequestHeader("content-type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr2.responseText);
  }
};
let jsonData = { firstName: "Kevin", lastName: "Chen" };
//将用户输入值序列化成字符串
xhr.send(JSON.stringify(sendData));
