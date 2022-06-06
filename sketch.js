const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var board, boardImg;
var arrow, arrowImg;
var check;
var boardX, boardY;
var boardXVal, boardYVal;
var arrows = [];

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  boardImg = loadImage("./assets/board.png");
  arrowImg = loadImage("./assets/arrow.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight - 4);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player);

  boardX = width * 2/3;
  boardY = height * 1/3;
  boardXVal = -3;
  boardYVal = 3;
  board = Bodies.rectangle(boardX,boardY,100,100, options);
  World.add(world,board);
 
  playerArcher = new PlayerArcher(330, playerBase.position.y - 112, 120, 240,130);
  arrow = new Arrow(0,0,240,30,308);
  arrows.push(arrow);

}

function draw() {
  background(backgroundImg);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  image(boardImg,boardX,boardY,150,200)

  Engine.update(engine);

   playerArcher.display();
   for(var i = 0; i < arrows.length; i++){
     if(i < arrows.length - 1){
        arrows[i].displayAfter();
     }else if(i === arrows.length - 1){
       arrows[i].display();
     }
  
   }


   console.log(arrows);

   boardX += boardXVal;
   boardY += boardYVal;

   if(boardX < width * 5/8){
     boardXVal = 3;
   }else if(boardX > width * 8/9){
     boardXVal = -3;
   }

   if(boardY < 1){
    boardYVal = 3;
  }else if(boardY > height * 6/9){
    boardYVal = -3;
  }


  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    arrow.shoot();
    arrow = new Arrow(0,0,240,30,playerArcher.angle + 87);
    arrows.push(arrow);
  }

}