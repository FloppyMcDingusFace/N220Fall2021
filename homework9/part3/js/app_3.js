let badwords = ["clear", "water", "tires"]
let values = document.getElementById("values");
let total = document.getElementById("total");
let thisround = document.getElementById("thisround");
let naughty=0

function check () {
   let statement = values.value
    console.log(statement)
    let split = statement.split(" ")
    console.log(split);
    let sum = 0

    let lookingfor1 = "clear";
    let lookingfor2 = "water";
    let lookingfor3 = "tires";
    for(let i = 0; i < split.length; i++) {
      let round = 0
      if (split[i]==lookingfor1){naughty = naughty + 1}
      if (split[i]==lookingfor2){naughty = naughty + 1}
      if (split[i]==lookingfor3){naughty = naughty + 1} 
      if (split[i]==lookingfor1){round = round + 1}
      if (split[i]==lookingfor2){round = round + 1}
      if (split[i]==lookingfor3){round = round + 1} 
        console.log(naughty);
        console.log(round);
        if (naughty>0){total.innerHTML="Total:" + naughty}
        else {total.innerHTML="No problem here!"}
        if (round==0){thisround.innerHTML="No Bad words found!"}
        else {thisround.innerHTML="Bad words were found!"}
        document.getElementById('values').value = '';
    }
   
}
