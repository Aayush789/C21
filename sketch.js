var movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,400);
  gameObject1 = createSprite(200, 200, 50, 50);
  gameObject1.shapeColor = "orange";

gameObject2 = createSprite(400,200,50,50);
gameObject2.shapeColor = "orange";

gameObject3 = createSprite(600,200,50,50);
gameObject3.shapeColor = "orange";

gameObject4 = createSprite(800,200,50,50);
gameObject4.shapeColor = "orange";

  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "orange";

}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1) === true || isTouching(movingRect,gameObject4 )=== true) {
    gameObject3.shapeColor = "blue";
    gameObject2.shapeColor  = "blue";

  }  else {
    gameObject3.shapeColor = "orange";
    gameObject2.shapeColor = "orange";
  }

  drawSprites();
}


