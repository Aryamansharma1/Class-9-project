var box;

function setup() {
  createCanvas(500,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background(30);
if(keyDown(RIGHT_ARROW)){
  background("red")
}
if(keyDown(LEFT_ARROW)){
 background("yellow")
}
if(keyDown(UP_ARROW)){
  background("blue")
}
if(keyDown(DOWN_ARROW)){
  background("green")
}
  drawSprites();
}




