//const Engine = Engine;
const World= World;
const Bodies = Bodies;
const Constraint = Constraint;

var block1,block2,box3,block4,block5,block6,block7,block8,block9;
var ground1;
var hexagon1;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(390,245,120,10);

  hexagon1=new Hexagon(100,200);
  slingshot = new SlingShot(hexagon1.body,{x:100, y:200});

//level one
block1=new Block(330,235,30,40);
block2=new Block(360,235,30,40);
block3=new Block(390,235,30,40);
block4=new Block(420,235,30,40);
block5=new Block(450,235,30,40);
//level two
block6=new Block(360,195,30,40);
block7=new Block(390,195,30,40);
block8=new Block(420,195,30,405);
//top
block9=new Block(390,155,30,40);

}

function draw() {
  background(255,255,255);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display(); 
    block7.display();
    block8.display();
    block9.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode ===32){
   slingshot.attach(hexagon1.body)
  }
  }