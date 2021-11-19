let color = document.getElementById("color")
let total = document.getElementById("total")
let rtot = 0
let gtot = 0
let btot = 0
let r = 0
let g = 0
let b = 0

color.style.height="100px";
color.style.width="1000px";
color.style.backgroundColor= 'rgb(' + r + ',' + b + ',' + g + ')';
color.style.float = "center";
total.style.float = "center";

function red_1() 
{r = r + 1;
total.innerHTML = "RGB"+r+","+g+","+b;
    color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
}
function red_5() {r = r + 5;
total.innerHTML = "RGB"+r+","+g+","+b;
    color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    }
function red_10() {r = r + 10;
total.innerHTML = "RGB"+r+","+g+","+b;
    color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    }

    function green_1() 
    {g = g + 1;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    }
    function green_5() {g = g + 5;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }
    function green_10() {g = g + 10;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }

    function green_1() 
    {g = g + 1;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    }
    function green_5() {g = g + 5;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }
    function green_10() {g = g + 10;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }

    function green_1() 
    {g = g + 1;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
    }
    function green_5() {g = g + 5;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }
    function green_10() {g = g + 10;
    total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }

function blue_1() 
        {b = b+ 1;
        total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
        }
function blue_5() {b = b + 5;
        total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
            }
function blue_10() {b = b + 10;
        total.innerHTML = "RGB"+r+","+g+","+b;
        color.style.backgroundColor = 'rgb(' + r + ',' + b + ',' + g + ')';
            }