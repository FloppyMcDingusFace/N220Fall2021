let eda = document.getElementById("eda")
let value= document.getElementById("value")
let nt= document.getElementById("total")
let tip= document.getElementById("Tip")
let vr = 0
let tp = 0
let newtotal = 0

function tax_evasion() {
console.log(eda.value)
vr = Math.round(eda.value * 7)/100;
console.log(vr);
tp = Math.round(eda.value * 15)/100;
console.log(tp);
value.innerHTML = "Tax=$" + vr;
tip.innerHTML = "Tip=$" + tp;
newtotal= Math.round(((eda.value*100) + (eda.value*15) + (eda.value*7)))/100;
console.log(newtotal)
nt.innerHTML = "Total=$" + newtotal;

}

