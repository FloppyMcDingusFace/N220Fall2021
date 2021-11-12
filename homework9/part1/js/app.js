let purgles = document.getElementById("purgles")
let objects = [

    { color: "#FF0000", height: "100", width: "300" },
   
    { color: "#FFFF00", height: "200", width: "200" },
   
    { color: "#ff0000", height: "300", width: "100" },
   
   ];


function split() {
    for(var i = 0; i < objects.length; i++) {
    let newEL = document.createElement("div");

    newEL.style.backgroundColor += objects[i].color;

    console.log(newEL.style.backgroundColor);

    newEL.style.height += objects[i].height + "px";
    console.log(newEL.style.height);

    newEL.style.width += objects[i].width + "px";
    console.log(newEL.style.width);

    purgles.appendChild(newEL)
    }
    }