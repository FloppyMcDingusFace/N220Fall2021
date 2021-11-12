let values = document.getElementById("values");
let total = document.getElementById("total");
let avg = document.getElementById("avg");

function breakString() {
    let statement = values.value
    console.log(statement)
    let split = statement.split(",")
    console.log(split)
    let sum = 0
    for(let i = 0; i < split.length; i++) { sum += Number(split[i]); 
        console.log(sum)
        console.log(sum / split.length);
        total.innerHTML="Total:" + sum;
        avg.innerHTML="Average:" + (sum/ split.length);
        document.getElementById('values').value = '';
    }
   
}

