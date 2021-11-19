let values1 = document.getElementById("values1")
let values2 = document.getElementById("values2")
let values3 = document.getElementById("values3")
let inco = document.getElementById("in")
let co = document.getElementById("co")

function check1 () {
  if (values1.value == "It is Arthur, King of the Britons") {co.innerHTML="correct!"}
  else {inco.innerHTML="INCORRECT!"}
}
function check2 () {
  if (values2.value == "To seek the Holy Grail") {co.innerHTML="correct!"}
  else {inco.innerHTML="INCORRECT!"}
}

function check3 () {
  if (values3.value == "An African or European swallow?") {co.innerHTML="I DON'T KNOW!"}
  else {inco.innerHTML="INCORRECT!"}
}