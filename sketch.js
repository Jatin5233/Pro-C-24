
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper;
var ground;
var box1;
var baby,talk,talk_1,shoe_1,shoe,baby_1,madeBy,madeBy_1,bg,bg_1,hit;
var PLAY;
var END;
var gs="PLAY";
function preload()
{

bg_1=loadImage("ghar3.jpg");

baby_1=loadImage("boy10.png");
shoe_1=loadImage("slipper.png");
madeBy_1=loadImage("madeBy.jpg");
talk_1=loadImage("talk1.png");

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
		
bg=createSprite(400,350,10,10);
bg.addImage(bg_1);
bg.scale=1;

baby=createSprite(200,500,10,10);
baby.addImage(baby_1);
baby.scale=0.4;
shoe=createSprite(-50,100,10,10);
shoe.addImage(shoe_1);
shoe.scale=0.4;
talk=createSprite(400,150,10,10);
talk.addImage(talk_1);
talk.scale=0.4;

	//Create the Bodies Here.
paper=new Paper();
ground=new Ground();
box1=new Dustbin();
//baby=new Baby();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(gs==="PLAY"){
 if(keyDown("space")){
	 talk_1=loadImage("talk2.png");
	 talk.addImage(talk_1);
	 talk.y=590;
	 talk.x=500;
 }
if(keyDown("shift")){
	talk.visible=false;
	shoe.velocityX=5;
	shoe.visible=false;

}
if(shoe.x===240){
	shoe.visible=true;
}
if(shoe.x===290){
	 shoe.velocityY=6;
	 shoe.velocityX=-2;
}
if(shoe.isTouching(baby)){
	shoe.x=-50;
	baby_1=loadImage("boyAgain2.png");
	baby.addImage(baby_1);
	talk.visible=true;
	talk_1=loadImage("talk3.png");
	talk.addImage(talk_1);

	}
}
	if(keyDown("ctrl")){
		
		gs="END";
	}
	if(gs==="END"){
		background(0);
		paper.display();
		box1.display();
		ground.display();
		fill(255);
		rect(400,580,900,50);
		push(); 
		fill(255);
		
		 rect(width/2+200,505,200,20);
		 pop();
		 baby.visible=false;
	talk.visible=false;
	bg.visible=false;
	}
	


console.log(gs);
  //baby.display();
  drawSprites();
  

  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:380,y:-380});
	
	}
}

