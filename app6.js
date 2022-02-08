let dragondamage = 0;
let usrdamage = 0;
let result;

while(dragondamage < 10 && usrdamage < 5) {
    let numhits = Number(prompt("Enter the number of hits to attempt (1-5)"));

    if(numhits > 5 || numhits < 1) {
        dragondamage = dragondamage + 1;
    }else{
        dragondamage = dragondamage + Math.floor(Math.random() * (numhits)) + 1;
    }
    usrdamage = usrdamage + Math.floor(Math.random() * (2)) + 1;
}

if(dragondamage >= 10) {
    result = "The user has defeated the dragon!"
}else if(usrdamage >= 5) {
    result = "Sorry, the dragon has defeated the user!"
}
document.body.innerHTML='User Damage: ' + usrdamage + '<br />' + 'Dragon Damage: ' + dragondamage + '<br />' + result;
