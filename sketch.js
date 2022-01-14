const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world;

options = {
  isStatic : true,
}

options2 = {
  restitution : 1.5,
}


ground = Bodies.rectangle(400, 390, 800, 20, options);
World.add(world, ground);


ball = Bodies.circle(400, 75, 20, options2);
World.add(world, ball);
}

function draw() {
  background("lightblue");
  Engine.update(engine);

  rectMode(CENTER);
  fill("lightgreen");
  rect(ground.position.x, ground.position.y, 800, 20);

ellipseMode(RADIUS);
fill("pink");
ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();

}