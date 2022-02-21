let global = 0;
// function for attack type and damage
function dmg_dealer(atktype, dmg) {
    if (atktype === 'fire') {
        dmg = dmg - 1;
    }else if (atktype === 'ice') {
        dmg = dmg + 1;
    }else {
        dmg = dmg;
    }
    return dmg;
}
let score = document.createElement('div')
score.innerHTML = 'Dragon Damage: ' + global;
document.body.appendChild(score)
// fire
let firebtn = document.createElement("button");
firebtn.innerHTML = "Fire attack";
firebtn.addEventListener('click', function(){
    global = global + Number(dmg_dealer('fire', 3))
    score.innerHTML = 'Dragon Damage: ' + global;
    if (global >= 10) {
        document.write('<br />' +'Dragon Damage: ' + global + '<br />' + 'You Win!')
    }
})
document.body.appendChild(firebtn);
// ice
let icebtn = document.createElement("button");
icebtn.innerHTML = "Ice attack";
icebtn.addEventListener('click', function(){
    global = global + Number(dmg_dealer('ice', 1))
    score.innerHTML = 'Dragon Damage: ' + global;
    if (global >= 10) {
        document.write('<br />' +'Dragon Damage: ' + global + '<br />' + 'You Win!')
    }
})
document.body.appendChild(icebtn);
// poison
let psnbtn = document.createElement("button");
psnbtn.innerHTML = "Poison attack";
psnbtn.addEventListener('click', function(dragondamage){
    global = global + Number(dmg_dealer('poison', 4))
    score.innerHTML = 'Dragon Damage: ' + global;
    if (global >= 10) {
        document.write('<br />' +'Dragon Damage: ' + global + '<br />' + 'You Win!')
    }
})
document.body.appendChild(psnbtn);



