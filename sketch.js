var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(400, 400);

  thickness = random(22,83); 

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"; 

  console.log(bullet);

  // bullet.debug = true;

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(0);


  hasCollide(); 
    
  drawSprites();


  function hasCollided(lbullet, lwall){

    bulletRightEdge = lbullet.x + lbullet.width; 
    wallLeftEdge = lwall.x; 
    if(bulletRightRdge>= wallLeftEdge){   
      return true; 
    }

      return false; 

    if(hasCollided(bullet, wall)){
      bullet.velocityX = 0; 
      var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness); 

    }
    if(damage >10){ 
      wall.shapeColor = color(255, 0, 0); 

    }

    if(damge<10){ 
      wall.shapeCOlor = color(0, 255, 0); 
    }
  }