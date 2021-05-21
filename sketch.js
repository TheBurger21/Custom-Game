var hero,heroImg;
var monster,monsterImg;
var ground;

function preload(){
  monsterImg=loadImage("monster.jpg");
  heroImg=loadImage("hero.png");
}

function setup() {
  createCanvas(1000, 400);
 hero=createSprite(300,300,20,20);
  
 hero.addImage("hero",heroImg);
  
 hero.scale=0.1;
  
 monster=createSprite(300,100,20,20);
  
 monster.addImage("monster",monsterImg);
  
 monster.scale=0.2;
 
 ground=createSprite(200,350,400,30);
 
 
}

function draw() {
  background(255);
  
  
  drawSprites();
}