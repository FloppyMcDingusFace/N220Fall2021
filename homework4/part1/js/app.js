let bbp = [ "#9d6c4c", "#fffee0", "#fa8cb1","#fffee0"]
let fr = 20;

function setup() {
  createCanvas(1000, 1000);
  

  background(50);
  
  for( let i = 0; i < bbp.length; i = i + 1) { console.log(bbp[i]); 
    fill(bbp[i]);
    rect(333 * i,0,333,333);
  }
}
