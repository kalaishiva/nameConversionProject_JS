//console.log(camelCase);

//camel case
const camel = (str) => {
    let outstr = "";
    //split it each word by using gap
    str.split(" ").map((value, index) => {
        if (index === 0) {
            outstr = value.toLowerCase();
        } else {
            outstr += value[0].toUpperCase() + value.slice(1);
        }
    });
    return outstr;
};




//pascal case

const pascal = (str) => {
    let outstr = "";
    //split it each word by using gap
    str.split(" ").map((value) => {
        outstr += value[0].toUpperCase() + value.slice(1);
        //console.log(outstr);
    });
    return outstr;
};

//snake case

const snake = (str) => {
    let word = "";
    str.split(" ").map((element) => {
        word += element[0].toLowerCase() + element.slice(1).toLowerCase() + "_";
    });
    return word.slice(0, -1);

};
// screaming snake case

const screamingSnake = (str) => {
    let word = "";
    str.split(" ").map((element) => {
        word += element[0].toUpperCase() + element.slice(1).toUpperCase() + "_";
    });
    return word.slice(0, -1);

};

//kebab case
const kebab = (str) => {
    let kebabword = "";
    str.split(" ").map((word) => {

        kebabword += word[0].toLowerCase() + word.slice(1).toLowerCase() + "-";
    })
    return kebabword.slice(0, -1);

};
//screaming kebab case
const screamingKebab = (str) => {
    let kebabword = "";
    str.split(" ").map((word) => {

        kebabword += word[0].toUpperCase() + word.slice(1).toUpperCase() + "-";
    })
    return kebabword.slice(0, -1);

};

//convert button
const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener('click', convert);

function convert() {
    //console.log("hi");
    let inputText = document.getElementById("text");
    let inputValues = inputText.value;

    let camelCase = document.querySelector("#camel-case");
    camelCase.textContent = camel(inputValues);

    let pascalCase = document.querySelector("#pascal-case");
    pascalCase.textContent = pascal(inputValues);

    let snakeCase = document.querySelector("#snake-case");
    snakeCase.textContent = snake(inputValues);

    let scrSnake = document.querySelector("#screaming-snake-case");
    scrSnake.textContent = screamingSnake(inputValues);

    let kebabCase = document.querySelector("#kebab-case");
    kebabCase.textContent = kebab(inputValues);

    let scrkeb = document.querySelector("#screaming-kebab-case");
    scrkeb.textContent = screamingKebab(inputValues);




}


/* console.log(camel("hi developers wel come"));
console.log(pascal("hi developers wel come"));
console.log(snake("hi developers Wel come"));
console.log(screamingSnake("hi developers Wel come"));
console.log(kebab("hi developers Wel come"));
console.log(screamingKebab("hi developers Wel come"));
//inputText.addEventListener("input", pascal); */