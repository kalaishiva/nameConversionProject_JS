let inputText = document.getElementById("text");

inputText.addEventListener("input", print);


let camelCase = document.querySelector("#camel-case");

//console.log(camelCase);
function print() {
    camelCase.innerHTML = inputText.value.camelCase();
}