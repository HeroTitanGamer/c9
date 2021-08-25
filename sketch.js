var box;
function setup() {
  createCanvas(2000,1000);
box = createSprite(200,200,30,30)
box.shapeColor = "red"

}
function draw() 
{
  background(30);
drawSprites()

if (keyIsDown(RIGHT_ARROW)){
  box.x += 5;
}
if (keyIsDown(LEFT_ARROW)){
  box.x -= 5;
}
if (keyIsDown(UP_ARROW)){
  box.y -= 5;
}
if (keyIsDown(DOWN_ARROW)){
  box.y += 5;
}
}




