// array
var list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];
let alen = list.length;
let names = document.createElement('div');
for (let i = 0; i < alen; i++) {
    if (list[i].sound > 5) {
        let name = "Name: " + list[i].name;
        let snd = "Sound: " + list[i].sound;
        let finalstr = name.fontsize(6)
            + '      ' + snd.fontsize(4)
            + '<br />' + '<br />';
        names.innerHTML = names.innerHTML + finalstr.fontcolor( "blue" );
    } else {
        let name = "Name: " + list[i].name;
        let snd = "Sound: " + list[i].sound;
        let finalstr = name.fontsize(6)
            + '      ' + snd.fontsize(4)
            + '<br />' + '<br />';
        names.innerHTML = names.innerHTML + finalstr;
    }
}
document.body.appendChild(names);

let counter = document.createElement('div');
let global = 10;
counter.innerHTML = global;
document.body.appendChild(counter);
let cbtn = document.createElement("button");
cbtn.innerHTML = 'counter';
cbtn.addEventListener('click', function(){
    global = global + 1;
    counter.innerHTML = global;
    if (global === 15) {
        let finish = document.createElement('div');
        finish.innerHTML = 'Cool! We hit the number!'
        document.body.appendChild(finish)
    }
})
document.body.appendChild(cbtn);
