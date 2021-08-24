var girlRunning;
var boyRunning,boysGroup;
var restart;
var score=0;
var gameState = "Play";

function setup() {
    createCanvas(1200,300);

    girlRunning= createSprite(70,150,20,20);
    girlRunning.setCollider("rectangle",0,0,40,40);
   
    boysGroup = new Group();  

    restart= createSprite(500,200,20,20);
}

function draw() {
    background(0);
    drawSprites();
    textSize(20);
    fill(255);
    text("Score: "+ score, 500,50);
  if(gameState==="Play"){

    restart.visible= false;

    score = score + Math.round(getFrameRate()/50);

    girlRunning.y = World.mouseY;

    edges= createEdgeSprites();
    girlRunning .collide(edges);

    makeOpponents();

    if(boysGroup.isTouching(girlRunning)){
        gameState= "End"
    }
  } 

  if(gameState==="End"){
        restart.visible= true;
        textSize(20);
        fill(255);
        text("Press the button to Restart the game!", 500,200);
        girlRunning.velocityX = 0;

        boysGroup.setLifetimeEach(-1);
        boysGroup.setVelocityXEach(0);

        if(mousePressedOver(restart)) {
            reset();
          }
  }

 
}
function reset(){
    gameState = "Play";
    boysGroup.destroyEach();
    score= 0;
}
function makeOpponents(){
    if (World.frameCount % 150 == 0) {
        boyRunning =createSprite(1100,Math.round(random(50, 250)),250,250);
        boyRunning.scale =0.06;
        boyRunning.velocityX = -10;
        boyRunning.setLifetime=170;
        boysGroup.add(boyRunning)
    }
}