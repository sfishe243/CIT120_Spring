// functions for turning text elements into header types
function h1(text) {
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    document.body.querySelector(".wrapper").appendChild(h1);
}
function h3(text) {
    var h1 = document.createElement('div');
    document.body.querySelector(".wrapper").appendChild(h1);
}
//global grades variables
var addedgrades = document.createElement("div");
var old = '';
// Nav button
function navbutton(page, pr, nv) {
    let button = document.createElement("button");
    button.innerHTML=page;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML="";
        nv();
    })
    pr.appendChild(button);

}
// Creating the nav buttons
function navigation(){
    let nav = document.createElement("nav");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height = "80px";
    nav.style.backgroundColor = "blue";
    navbutton("Grade View", nav, gradeview);
    navbutton("Add Grade", nav, interact);
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}
function gradeview() {
    let grade = document.createElement("div");
    grade.innerHTML = "";
    gradetext = "Grades";
    h1(gradetext);
    document.body.querySelector(".wrapper").appendChild(grade);
    document.body.querySelector(".wrapper").appendChild(addedgrades);

}
function interact() {
    let inter = document.createElement("div");
    inter.innerHTML="";
    let interacttext = "Add Grades";
    h1(interacttext);
    document.body.querySelector(".wrapper").appendChild(inter);
    let inputtxt = document.createElement("input");
    let gradenum = document.createElement("input");
    inputtxt.placeholder="Student Name";
    gradenum.placeholder= "Grade (0-100)";
    let warning = document.createElement("h3");
    warning.innerHTML ='';
    var notebutn = document.createElement("button");
    notebutn.innerHTML = "Add grade";
    notebutn.addEventListener("click", function(){
        if(isNaN(inputtxt.value)===true){
            if(isNaN(gradenum.value)===false){
                if(gradenum.value > 0 && gradenum.value < 100) {
                    warning.innerHTML = '';
                    addedgrades.innerHTML = old + inputtxt.value + '        ' + gradenum.value.toString() + "</br>";
                    old = addedgrades.innerHTML;
                    document.body.querySelector(".wrapper").innerHTML="";
                    gradeview();
                } else {
                    warning.innerHTML="Grade must be a number between 0 and 100";
                }
            } else {
                warning.innerHTML="Grade must be a number";
            }
        } else {
            warning.innerHTML="Student name must be a string";
        }
    })
    document.body.querySelector(".wrapper").appendChild(inputtxt);
    document.body.querySelector(".wrapper").appendChild(gradenum);
    document.body.querySelector(".wrapper").appendChild(notebutn);
    document.body.querySelector(".wrapper").appendChild(warning);
}
function login(){
    let usrname = document.createElement("input");
    let password = document.createElement("input");
    usrname.placeholder = "Username";
    password.placeholder = "Password";
    password.setAttribute("type", "password");
    let message = document.createElement("h3");
    let butn = document.createElement("button");
    butn.innerHTML = "Log in";

    butn.addEventListener("click", function(){
        if(usrname.value==="cool"){
            if(password.value==="password"){
                message.innerHTML="Logged in";
                usrname.style.display = 'none';
                password.style.display = 'none';
                message.style.display = 'none';
                butn.style.display = 'none';
                navigation();
                gradeview();
            } else {
                message.innerHTML = "Incorrect Password";
            }
        } else {
            message.innerHTML="Incorrect Username";
        }
    })

    document.body.appendChild(usrname);
    document.body.appendChild(password);
    document.body.appendChild(message);
    document.body.appendChild(butn);
}
login();