let inputText = document.getElementById("text");
let values = inputText.value;


let camelCase = document.querySelector("#camel-case");
let pascalCase = document.querySelector("#pascal-case");

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



console.log(camel("hi developers wel come"));
console.log(pascal("hi developers wel come"));
console.log(snake("hi developers Wel come"));
console.log(screamingSnake("hi developers Wel come"));
console.log(kebab("hi developers Wel come"));
console.log(screamingKebab("hi developers Wel come"));
//inputText.addEventListener("input", pascal);