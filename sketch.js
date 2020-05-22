var fixedRect, movingRect;
var gameobject1,gameobject2;
function setup() {
  createCanvas(1200,800);
  //fixedRect = createSprite(400, 100, 50, 80);
  //fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100,100,50,50);
gameobject1.shapeColor = "green";
gameobject2 = createSprite(200,100,50,50);
gameobject2.shapeColor = "green";
 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
movingRect.x = mouseX;
movingRect.y = mouseY;
istouching(movingRect,gameobject1);
  if (istouching (movingRect ,gameobject2)){
      movingRect.shapeColor = "red";
      gameobject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }


  drawSprites();
}

