var car1,car2;
var car1img,car2img;
var obs1,obs2,obs3,obs4,obs5,obs;
var logo;
var obs1img,obs2img,obs3img,obs4img,obs5img,obsgroup,;
var start, restart, gameover;
var track, banana;
var startimg,restartimg,gameoverimg,trackimg,bananaimg,logoimg;
var gameState=PLAY;
var PLAY=1;
var END=0;


function preload(){
car1img=loadImage("car2.png");
car2img=loadImage("car4.png");
startimg=loadImage("start.png");
restartimg=loadImage("resart.png");
gameoverimg=loadImage("gameover.png");
trackimg=loadImage("track.jpg");
obs1img=loadImage("obs1.png");
obs2img=loadImage("ob2.png");
obs3img=loadImage("obs3.png");
obs4img=loadImage("obs4.png");
obs5img=loadImage("obs5.png");
logoimg=loadImage("logo.jpeg");
}

function setup(){
createCanvas(1200,1200);
track=createSprite(500,350,1200,1200);
track.addImage(trackimg);
track.scale=1.5
car1=createSprite(350,850,10,10);
car1.addImage(car1img);
car1.scale=0.5;
car2=createSprite(700,850,10,10);
car2.addImage(car2img);
car2.scale=0.6;
logo=createSprite(500,450);
logo.addImage(logoimg);
logo.scale=0.2;
start=createSprite(500,650);
start.addImage(startimg);
start.scale=0.9;
gameover=createSprite(500,500)
gameover.addImage(gameoverimg);
gameover.scale=0.9
restart=createSprite(500,700);
restart.addImage(restartimg);
restart.scale=0.8;
gameover.visible=false;
restart.visible=false;
score=0;
obsgroup=new Group();

}
function draw(){
background("black");
if (mousePressedOver(start)){
gameState=PLAY;
start.visible=false;
logo.visible=false;
car2.x=700;
car2.y=850;
car1.x=350;
car1.y=850;
}

if (gameState===PLAY){
score=score+Math.round(getFrameRate()/60)
car1.velocityY=0;
car1.velocityX=0;
car2.velocityY=0;
car2.velocityX=0;
car1.x=World.mouseX;

if(track.y>800){
    track.y=400
    }
    track.velocityY=4
if(keyDown(LEFT_ARROW)){
car2.x=-4;
}
if(keyDown(RIGHT_ARROW)){
car2.x=6;    
}
car1.x=World.mouseX;
if(car1.x<0||car2.x<0||car1.x>800||car2.x>800){
gameState=END;
}

}
else if(gameState===END){
    car2.x=700;
    car2.y=850;
    car1.x=350;
    car1.y=850;
gameover.visible=true;
restart.visible=true;
background.velocityX=0
obsgroup.setVelocityXEach(0);
obsgroup.setVelocityYEach(0);
obsgroup.destroyEach();
}
if(mousePressedOver(restart)){
reset();
}
drawSprites(); 
text("SCORE: "+score,1000,50);
}
function reset(){
gameState=PLAY;
gameover.visible=false;
restart.visible=false;
score=0
}
function obs(){
if(frameCount%60===0){
obs=createSprite(500,450,50,50)
obs.velocityX= -(6+3*score/100)
var rand = Math.round(random(1,5));
switch(rand){
    case 1: obs.addImage(obs1);
    break;
case 2: obs.addImage(obs2);
    break;
case 3: obs.addImage(obs3);
    break;
case 4: obs.addImage(obs4);
    break;
case 5: obs.addImage(obs5);
    break;

default: break;
}

//assign scale and lifetime to the obstacle           
obs.scale = 0.5;
obs.lifetime = 300;






}
}    
