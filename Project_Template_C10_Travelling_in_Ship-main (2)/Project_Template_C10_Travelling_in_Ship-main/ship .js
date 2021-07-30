var sea, ship, movingShip, seaImage

function preload(){
movingShip=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
oceanImage=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400, 200);
  sea.addImage(oceanImage);
  sea.x = sea.width/2;


  ship = createSprite("125,200,10,10");
  ship.addAnimation("moving",movingShip);
  ship.scale = 0.3;

}

function draw() {
  background("white");
  sea.velocityX = -4;
  if(sea.x < 0)(
    sea.a = sea.width/2
  );

drawSprites();
}