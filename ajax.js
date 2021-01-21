let xhr = new XMLHttpRequest();
xhr.open('GET','api/test','true');
xhr.send()
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
    	console.log(xhr.responseText);
    }
}

let xhr2 = new XMLHttpRequest();
xhr2.open('POST','api/test','true');
xhr2.setRequestHeader("content-type","application/x-www-form-urlencoded");
xhr2.send("firstName=Kevin&lastName=Chen");
xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {
    	console.log(xhr2.responseText);
    }
}