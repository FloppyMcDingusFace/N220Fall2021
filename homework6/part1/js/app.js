let d = document.getElementById("d")
let s = document.getElementById("s")
d.style.width=100 + "px";
d.style.height=10 + "px";

let Fighter = {
    attack: 150,
    defense: 50,
    special: 100,
    hp: 50,
}


let Mage = {
    attack: 50,
    defense: 75,
    special: 150,
    hp: 50,
}


let round = 0



let p = document.getElementById("p")

p.style.backgroundColor = "#00ff00";
p.style.width = 50+"px" ;
p.style.height = "25px" ;
p.innerHTML= "HP:"+Fighter.hp;


e.style.backgroundColor = "#ff0000";
e.style.width = "50px";
e.style.height= "25px";
e.innerHTML= "HP:"+Mage.hp;


function playerattack() {
    Mage.hp=Mage.hp- Math.round(((Math.random(Fighter.attack)/10)+ Fighter.attack)-Mage.defense);
    console.log(Mage.hp);
        if (Mage.hp <=0) {Mage.hp = 0; d.innerHTML = "You Win!"}
        
    round = round + 1;
    let i= 0; 
    i=i + Math.random();
        if (i<=0.5) { Fighter.hp= Fighter.hp-Math.round(((Math.random(Mage.attack)/10)+ Mage.attack)-Fighter.defense);}
        if (i>0.5) { Fighter.hp= Fighter.hp- Math.round(((Math.random(Mage.special)/10)+ Mage.special)-Fighter.defense);}
    console.log(Fighter.hp);
    if (Fighter.hp <=0) {Fighter.hp = 0; d.innerHTML = "You Lose!"}
     p.innerHTML= "HP:"+Fighter.hp;
}

function playerspecial() {
    Mage.hp = Mage.hp- Math.round(((Math.random(Fighter.special)/10)+ Fighter.special)-Mage.defense);
    console.log(Mage.hp);
        if (Mage.hp <=0) {Mage.hp = 0; d.innerHTML = "You Win!"}
        
    round = round + 1;
    let i= 0; 
    i=i + Math.random();
        if (i<=0.5) { Fighter.hp=Fighter.hp- Math.round(((Math.random(Mage.attack)/10)+ Mage.attack)-Fighter.defense);}
        if (i>0.5) { Fighter.hp=Fighter.hp- Math.round(((Math.random(Mage.special)/10)+ Mage.special)-Fighter.defense);}
        if (Fighter.hp <=0) {Fighter.hp = 0; d.innerHTML = "You Lose!"}
        console.log(Fighter.hp);
        p.innerHTML= "HP:"+Fighter.hp;
    
}


s.innerHTML = "Attack:"+ (Fighter.attack) +"<br />"+"Defense:"+ (Fighter.defense) +"<br />"+"Special:"+(Fighter.special)