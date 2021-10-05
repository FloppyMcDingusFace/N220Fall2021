let n = document.getElementById("n")


n.style.backgroundColor = "#0000ff";
n.style.width = "100px" ;
n.style.height = "100px" ;





document.body.appendChild(n);


function blue () {
    n.style.backgroundColor = "#0000ff";
    n.style.width = "100px" ;
    n.style.height = "100px" ;
    document.body.appendChild(n);
    console.log(n);
}

function black () {
    n.style.backgroundColor = "#000000";
    n.style.width = "100px" ;
    n.style.height = "100px" ;
    document.body.appendChild(n);
    console.log(n);
}

