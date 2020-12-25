const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform,constrainedlog,chain;

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;


   // ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

  //  box1 = new Box(700,320,70,70);
   box2 = new Ball(400,100,500,20);
   // pig1 = new Pig(810, 350);
  //  log1 = new Log(810,260,300, PI/2);
	constrainedlog = new Ball1(200,400,100);
	constrainedlog1 = new Ball1(300,400,100);
	constrainedlog2 = new Ball1(400,400,100);
	constrainedlog3 = new Ball1(500,400,100);
	constrainedlog4 = new Ball1(600,400,100);
   
  //  box3 = new Box(700,240,70,70);
   // box4 = new Box(920,240,70,70);
  //  pig3 = new Pig(810, 220);

   log3 =  new Ball(300,100,100,20);

  // box5 = new Box(810,160,70,70);
   // log4 = new Log(760,120,150, PI/7);
//log5 = new Log(870,120,150, -PI/7);

	bird  = new Ball(200,100,100,20);
	bird1 = new Ball(400,100,100,20);
	bird2 = new Ball(500,100,100,20);
	bird3 = new Ball(600,100,100,20);
	chain = new Chain(bird.body,constrainedlog.body);
	chain1 = new Chain(log3.body,constrainedlog1.body);
	chain2 = new Chain(bird1.body,constrainedlog2.body);
	chain3 = new Chain(bird2.body,constrainedlog3.body);
	chain4 = new Chain(bird3.body,constrainedlog4.body);

   

}

function draw(){
    background("white");
	Engine.update(engine);
	
  //  console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
  //  box1.display();
   
  //  ground.display();
  //  pig1.display();
  //  log1.display();


  //  box3.display();
  //  box4.display();
  //  pig3.display();
   log3.display();
	bird.display();
	bird1.display();
	bird2.display();
	bird3.display();
    box2.display();
  
   // box5.display();
   // log4.display();
 //   log5.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain.display();
	
  constrainedlog.display();
 constrainedlog1.display();
   constrainedlog2.display();
   constrainedlog3.display(); 
   constrainedlog4.display();






	tt();
  //  platform.display();
}

function tt(){
	if (keyWentDown(UP_ARROW) ) {
		// Loohe hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	 Matter.Body.applyForce(constrainedlog.body,constrainedlog.body.position,{x:-185,y:-85});
	
	 }

}
