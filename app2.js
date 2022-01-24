// Variables store information (scripts + prompts)

//variables for strings

// static variables (strings)
// let name = "Boop";
// let lName = "Snoop";

// user input (let) variables (prompts: returning strings)

// let name = prompt("What is your first name?");
// let lName = prompt("What is your last name?");


//combine names into one variable/string

// let fName = name+" "+lName;

//variables for numbers
// "Number" turns strings into variables w/ numeric value

let number1 = Number(prompt("total bill $"));
// let number2 = Number(prompt("second number"));

let number2 = 0.07*number1;
let taxedbill = number1+number2;
let tip = taxedbill*0.05;
let total = taxedbill+tip;
// let totalPrice = sum-percy;

// let totalPrice = (number1+number2)-((number1+number2)*0.3);

//write value of variables to the web page

//writing for the strings

// document.body.innerHTML=fName;

//writing for numbers

document.body.innerHTML=total;