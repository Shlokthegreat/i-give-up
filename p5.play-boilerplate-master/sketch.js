var wall, thickness;
var bullet,speed, weight

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
wall=createSprite(1200,200,thickness, height/2)
speed=random(223,321)
weight=random(30,52)
bullet=createSprite(50,200,50,5)
bullet.veolocityX=speed
}

function draw() {
  background(255,255,255);  
  //last if contion
  if(hasColllided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 *weight *speed * speed/(tickness * thickness)
   
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0)
    }
  drawSprites();


 function hasCollided(Lbillet,Lwall)
 {
bulletRightEdge=lbulle
}