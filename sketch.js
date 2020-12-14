const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon1

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;



function preload(){
 
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19= new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);
  //level two
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);
  //top
  block25 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  polygon1 =new polygon(200,200,20);

  slingShot = new Sling(polygon1.body,{x:100,y:200})

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
 
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagon Stone and Release it, to launch it towards the block",100,30);

  textSize(20);
  fill("lightyellow");
  text("!!Press Space to get a second chance to play!!",480,350);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);


  fill(130, 237, 237);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(230, 190, 234)
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();


  fill(60, 242, 163);
  block13.display();
  block14.display();
  block15.display();


  fill(239,242,72);
  block16.display();


  fill(130, 237, 237);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();


  fill(230, 190, 234)
  block22.display();
  block23.display();
  block24.display();


  fill(60, 242, 163);
  block25.display();


  fill(239,242,72);

  polygon1.display();

  slingShot.display();
}



function mouseDragged()
{
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
  slingShot.fly();
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(polygon1.body,{x:100,y:200});
    slingShot.attacher(polygon1.body);
  }
}