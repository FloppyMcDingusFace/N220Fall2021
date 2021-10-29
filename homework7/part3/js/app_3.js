let eda = document.getElementById("eda")
let txt = document.getElementById("text")
let g = 0
let v = eda.value

function determine () {
    console.log(eda.value);
    g = Math.round((Math.random() * (20-1) + (1)));
    console.log(g);
     if(eda.value > g) {txt.innerHTML="NO! Too High!"}
     if (eda.value < g) {txt.innerHTML="NO! Too Low!"}
     if (eda.value == g) {txt.innerHTML="CONGRATS, YOU DID IT!"}
    console.log(txt.innerHTML);
}
