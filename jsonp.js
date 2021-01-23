function jsonp(url, params = {}, callback = "") {
  params.callback = callback;
  let paramsArr = [];
  for (let key in params) {
    paramsArr.push(key + "=" + params[key]);
  }
  let script = document.createElement("script");
  script.src = url + "?" + paramsArr.join("&");
  document.appendChild(script);
}
