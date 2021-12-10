let xPositions = [];
let yPositions = [];
let food = [];
let rgb = ["#ff0000", "#ff8000", "#ffff00","#80ff00", "#00ff00","#00ff80","#00ffff", "#0080ff", "#0000ff","#8000ff","#ff00ff","#ff0080"]
let g = 0
let n = 1
let foodX = 0
let foodY = 0
let sx = xPositions[0];
let sy = yPositions[0];
let snake = [
    {x: 250, y: 250},
    {x: 245, y: 250 },
    {x: 240, y: 250 },
  ]
x1= 10;
y1= 0;

function setup () {
    createCanvas(1000,1000);
}


function repeat() {

    if (failure) return;

    
    setTimeout(function onTick() {
    clear();
    move();
    draw();
    
    repeat();
  }, 100)
}


function gen_food() 
{  if  (g < rgb.length) {g++}
   else (g = 0);

    foodX = Math.round((Math.random() * (989-1) + 1) / 10) * 10;
    console.log(foodX)
    foodY =  Math.round((Math.random() * (989-1) + 1) / 10) * 10;
    console.log(foodY)
    rect(foodX, foodY, 25,25);
    fill(rgb[g]);
    snake.forEach(function has_snake_eaten_food(part) {
      const consume = mouseX == foodX && mouseY == foodY;
      if (consume) {gen_food(); grow ()}
    })
    
      };



 function draw () {
  background(0);
   rect(foodx,foody, 25,25)

       }

function move_snake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const eaten= snake[0].x === food_x && snake[0].y === food_y;
        if (eaten) {
          gen_food(); grow()
        } else {
          snake.pop();
        }
      }

function failure () {
  {
        for (let i = 4; i < snake.length; i++) {
          if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
        }
        const borderL = snake[0].x < 0;
        const borderR = snake[0].x > 1000;
        const borderUp = snake[0].y < 0;
        const borderdown = snake[0].y > 1000;
        return borderL || borderR || borderUp || borderdown
      }
}
function grow () {
   if (n<13) {n=n+1;}}
