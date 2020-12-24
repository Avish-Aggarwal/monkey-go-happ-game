var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;


function preload()
{
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  score=0;
  FoodGroup=new Group()
  obstacleGroup=new Group()
  
  
}


function draw() 
{
  background(225);
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(frameCount);
  
  text("Score: "+ score, 500,50);
  
  if(monkey.isTouching(FoodGroup))
    {
      score=score+1
      
    }
  
  if(monkey.isTouching(obstacleGroup))
    {
      obstacleGroup.destroyEach();
      FoodGroup.destroyEach();
      obstacleGroup.setVelocityXEach(0);
      FoodGroup.setVelocityXEach(0);
      monkey.velocityX=0;
      text("Game Over",200,200);
      ground.visible=false;
      monkey.visible=false
      obstacleGroup.setLifetimeEach(-10);
    FoodGroup.setLifetimeEach(-10);
      FoodGroup.visible=false;
      obstacleGroup.visible=false;
     
      
    }
  
  if(keyDown("space"))
  {
     monkey.velocityY = -12;
  }
      
  
     monkey.velocityY = monkey.velocityY + 0.8;
  
      monkey.collide(ground)
  
 spawnBananas();
  spawnObstacles();
     
  drawSprites();
}

function spawnBananas()
{
  if(frameCount%80===0)
  {
    var banana=createSprite(200,165,10,40);
    banana.addAnimation("food",bananaImage);
    banana.scale=0.1;
   banana.y=Math.round(random(120,200));
    banana.x=Math.round(random(200,600));
    banana.velocityX=-6;
    banana.setLifetime=350;
    
    FoodGroup.add(banana)
    
  }
}

function spawnObstacles()
{
  if(frameCount%300===0)
    {
      var obstacle=createSprite(350,325,10,40);
      obstacle.addAnimation("obstacleImage");
      
      obstacle.x=Math.round(random(300,550));
      obstacle.velocityX=-8;
      obstacle.setLifetime=350;
      obstacleGroup.add(obstacle)
      
      
    }
}




