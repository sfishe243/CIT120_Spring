// create nav menu bar
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
    navbutton("Interact", nav, interact);
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
    let interacttext = "Interact";
    h1(interacttext);
    document.body.querySelector(".wrapper").appendChild(inter);
    let counter = document.createElement('div');
    let global = 0;
    counter.innerHTML = global;
    let cbtn = document.createElement("button");
    cbtn.innerHTML = 'Increase Counter';
    cbtn.addEventListener('click', function(){
        global = global + 1;
        counter.innerHTML = global;
    })
    document.body.querySelector(".wrapper").appendChild(cbtn);
    document.body.querySelector(".wrapper").appendChild(counter);
}

navigation();
homePage();