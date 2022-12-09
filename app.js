var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdev = document.querySelector("#output")



function clickHandler() {
   outputdev.innerText = "akldcjsdj " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);



