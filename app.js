var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

function clickHandler() {
   console.log("clicked");
   console.log("input" , txtInput.nodeValue)
}

btnTranslate.addEventListener("click", clickHandler);