const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var radius = 40;

var ball = [];


function preload(){
  GroundImg = loadImage("ground.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ball = Bodies.circle(1000 ,380, radius/2);

  tree = new tree(250, 440, 20, 20);


  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(GroundImg);

  ellipse(ball.position.x, ball.position.y, radius, radius);

  tree.display();

  Engine.update(engine);
  
}


if(keyDown(RIGHT_ARROW)){
   ball.shoot(tree.body);
}
