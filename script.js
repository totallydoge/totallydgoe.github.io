var a;

function vars() {
  //get value of input field and save as "a"
  a = document.getElementById('name').value
  //create LS key with value of "a"
  localStorage.setItem('uName', a);
  //automatically take user to page two.html
  location.href = "two.html";
}

function sayname() {
  var b = localStorage.getItem('uName');
  document.getElementById('placeholder').innerHTML = "Hello " + b;
}
