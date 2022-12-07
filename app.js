var btn = document.getElementById("myBtn").addEventListener("click", displayDate);

var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  document.querySelector(".example").style.backgroundColor = "red";