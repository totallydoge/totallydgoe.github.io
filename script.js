var fieldValue;

function saveName() {
  //get value of input field and save as "fieldValue"
  fieldValue = document.getElementById('textfield').value
  //create LS key with value of "fieldValue"
  localStorage.setItem('uName', fieldValue);
  //automatically take user to page two.html
  location.href = "two.html";
}

function getUser() {
  var b = localStorage.getItem('uName');
  document.getElementById('placeholder').innerHTML = "Hello " + b;
}
