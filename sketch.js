var boy, ball;

function setup() {
  createCanvas(800, 400);
  boy = createSprite(400, 200, 50, 50);
  boy.shapeColor = "red";


  ball = createSprite(200, 200, 50, 50);
  ball.shapeColor = "green";
  ball.velocityX = 5;
  // ball.velocityY = 5;
}

function draw() {
  background("black");

  boy.x = mouseX;
  boy.y = mouseY;


  ronak();

  drawSprites();

}
function ronak() {
  if (boy.x - ball.x <= ball.width / 2 + boy.width / 2 &&
    ball.x - boy.x <= ball.width / 2 + boy.width / 2 &&
    boy.y - ball.y <= ball.height / 2 + boy.height / 2 &&
    ball.y - boy.y <= ball.height / 2 + boy.height / 2) {
    ball.shapeColor = "red";
    ball.velocityX = -ball.velocityX;

  } else {
    ball.shapeColor = "green";
    ball.velocityX = ball.velocityX;
  }
}


