const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const size = 20;
let snake = [{x:200,y:200}];
let food = {x:100,y:100};
let dx = size;
let dy = 0;

document.addEventListener("keydown", e => {
  if(e.key==="ArrowUp" && dy===0){dx=0;dy=-size}
  if(e.key==="ArrowDown" && dy===0){dx=0;dy=size}
  if(e.key==="ArrowLeft" && dx===0){dx=-size;dy=0}
  if(e.key==="ArrowRight" && dx===0){dx=size;dy=0}
});

function loop(){
  ctx.clearRect(0,0,400,400);

  const head = {x:snake[0].x+dx,y:snake[0].y+dy};
  snake.unshift(head);

  if(head.x===food.x && head.y===food.y){
    food = {
      x:Math.floor(Math.random()*20)*size,
      y:Math.floor(Math.random()*20)*size
    };
  } else {
    snake.pop();
  }

  ctx.fillStyle="#00ff95";
  snake.forEach(p=>ctx.fillRect(p.x,p.y,size,size));

  ctx.fillStyle="#ff0066";
  ctx.fillRect(food.x,food.y,size,size);

  setTimeout(loop,120);
}

loop();
