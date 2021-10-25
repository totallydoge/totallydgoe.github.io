var fieldValue;

function saveName() {
  fieldValue = document.getElementById('textfield').value
  localStorage.setItem('uName', fieldValue);
  location.href = "page2.html";
}
