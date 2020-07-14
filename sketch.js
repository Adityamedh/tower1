const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world;
var engine;
var ground;
var  box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var sling;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


  ground = new Ground(400,310,200,10);
  box1 = new Box(320,275,30,60);
  box2 = new Box(350,275,30,60);
  box3 = new Box(380,275,30,60);
  box4 = new Box(410,275,30,60);
  box5 = new Box(440,275,30,60);
  box6 = new Box(470,275,30,60);
  box7 = new Box(335,209,30,60);
  box8 = new Box(365,209,30,60);
  box9 = new Box(395,209,30,60);
  box10 = new Box(425,209,30,60);
  box11 = new Box(455,209,30,60);
  box12 = new Box(440,143,30,60);
  box13 = new Box(410,143,30,60);
  box14 = new Box(380,143,30,60);
  box15 = new Box(350,143,30,60);
  box16 = new Box(365,77,30,60);
  box17 = new Box(395,77,30,60);
  box18 = new Box(425,77,30,60);


 
stone = new Bird(100,200,30,30);






  sling = new Slingshot(bird.bodyA,{x:200, y:50});

}

function draw() {
  background(0,0,0);  



ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();



stone.display();



sling.display();








  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}