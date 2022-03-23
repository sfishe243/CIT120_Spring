

// functions for turning text elements into header types
function h1(text) {
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(text));
    document.body.querySelector(".wrapper").appendChild(h1);
}
function h3(text) {
    var h1 = document.createElement('h3');
    h1.appendChild(document.createTextNode(text));
    document.body.querySelector(".wrapper").appendChild(h1);
}

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

function navigation(){
    let nav = document.createElement("nav");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height = "80px";
    nav.style.backgroundColor = "blue";
    navbutton("Home", nav, homePage);
    navbutton("About", nav, about);
    navbutton("View", nav, interact);
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}
function homePage() {
    let home = document.createElement("div");
    home.innerHTML = "";
    hometext = "Home";
    h1(hometext);
    document.body.querySelector(".wrapper").appendChild(home);
}
function about() {
    let about = document.createElement("div");
    let name = document.createElement("div");
    about.innerHTML = "";
    name.innerHTML = "";
    let abouttext = "About";
    h1(abouttext);
    let nametext = "Sydney";
    h3(nametext);
    document.body.querySelector(".wrapper").appendChild(about);
    document.body.querySelector(".wrapper").appendChild(name);
}
function interact() {
    let inter = document.createElement("div");
    inter.innerHTML="";
    let interacttext = "View Notes";
    h1(interacttext);
    document.body.querySelector(".wrapper").appendChild(inter);
    let inputtxt = document.createElement("input");
    let importance = document.createElement("input");
    inputtxt.placeholder="Text";
    importance.placeholder= "Importance";
    let note = document.createElement("div");
    note.innerHTML = '';
    let oldnote = '';
    let warning = document.createElement("h3");
    warning.innerHTML ='';
    let notebutn = document.createElement("button");
    notebutn.innerHTML = "Take note";
    notebutn.addEventListener("click", function(){
        if(inputtxt.value.length > 1){
            if(isNaN(importance.value)===false){
                warning.innerHTML = '';
                note.innerHTML = oldnote + importance.value.toString() + ' ' + inputtxt.value + '<br />';
                oldnote = note.innerHTML
            } else {
                warning.innerHTML="Importance must be a number";
            }
        } else {
            warning.innerHTML="Note is not longer than 1 character";
        }
    })
    document.body.querySelector(".wrapper").appendChild(inputtxt);
    document.body.querySelector(".wrapper").appendChild(importance);
    document.body.querySelector(".wrapper").appendChild(notebutn);
    document.body.querySelector(".wrapper").appendChild(warning);
    document.body.querySelector(".wrapper").appendChild(note);

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
        if(usrname.value==="coolStudent123"){
            message.innerHTML="Logged in";
            usrname.style.display = 'none';
            password.style.display = 'none';
            message.style.display = 'none';
            butn.style.display = 'none';
            navigation();
            homePage();
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


