// array for assignment
var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
];

let alen = warriors.length;

for (let i = 0; i < alen; i++) {
    if (warriors[i].health >= 10) {
        if (warriors[i].damage >= 2) {
            if (warriors[i].warrior === true) {
                if (warriors[i].name.includes('a') === true) {
                    let name = "Name: " + warriors[i].name;
                    let dam = "Damage: " + warriors[i].damage;
                    let heal = "Health: " + warriors[i].health;
                    let finalstr = name.fontsize(6)
                        + '<br />' + dam.fontsize(3)
                        + '<br />' + heal.fontsize(3)
                        + '<br />' + '<br />';
                    document.write(finalstr.fontcolor( "red" ));
                }else {
                    let name = "Name: " + warriors[i].name;
                    let dam = "Damage: " + warriors[i].damage;
                    let heal = "Health: " + warriors[i].health;
                    document.write(name.fontsize(6)
                        + '<br />' + dam.fontsize(3)
                        + '<br />' + heal.fontsize(3)
                        + '<br />' + '<br />');
                }
            }
        }
    }
}
