
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var tree, stone,ground, launcher,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,engine;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(140,450,30); 

  mango1 = new Mango(650,190,20)
	mango2 = new Mango(500,210,30)
	mango3 = new Mango(560,270,25)
	mango4 = new Mango(730,150,15)

	mango5 = new Mango(570,90,25)
	mango6 = new Mango(700,40,20)
	mango7 = new Mango(750,250,25)
  mango8 = new Mango(840,230,20)
  

	tree =new Tree(650,380);
	ground=new Ground(width/2,600,width,20);
	launcher=new Launcher(stone.body,{x:140,y:450})
  
	
	Engine.run(engine);

}

function draw() {

  background(250,200,10);
  
  textSize(20);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,100,370,200,300);


  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  stone.display();

  ground.display();
  launcher.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	launcher.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }