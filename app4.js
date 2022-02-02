let question = Number(prompt("Enter a number"));


let result;

if(isNaN(question) === true) {
    result = "Invalid Number 1"
}else{
    let question2 = Number(prompt("Enter a second number"));

    if(isNaN(question2) === true) {
        result = "Invalid Number 2"
    }else{
        let operator = prompt("Enter an operator");

        if(operator === '+') {
            result = question + question2
        }else if(operator === '-') {
            result = question - question2
        }else if(operator === '*') {
            result = question * question2
        }else if(operator === '/') {
            result = question / question2
        }else{
            result = "Invalid operator"
        }
    }
}
document.body.innerHTML=result
