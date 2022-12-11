var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdev = document.querySelector("#output")


var sreverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslateURL(text) {
   return sreverURL + "?" + "text" + text;
}


function errorHandler(error) {
   console.log("error occured", error);
   alert("somthing wrong occured with the server! try again same time latter!");
}


function clickHandler() {
   //outputdev.innerText = "akldcjsdj " + txtInput.value;
   var inputText = txtInput.value;

   //calling server for processing
   fetch(getTranslateURL(inputText))
      .then(response => response.json())
      .then(json => {
         var translatedText = json.contents.translated;
         outputDev.innerText = translatedText; // output
      })
      .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);