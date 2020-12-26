
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var rectangle1,rectangle2,rectangle3,dust,dustImage;

function preload(){
dustImage = loadImage("dustbingreen.png");
	
}

function setup() {
	createCanvas(1350, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dust = createSprite(1180,520,20,200);
	dust.addImage(dustImage);
	dust.scale = 0.9;

	paper = new Paper(100,200,45);

	rectangle1=createSprite(1070,535,20,260);
	rectangle1.shapeColor=color("green");

	rectangle2=createSprite(1180,650,200,20);
	rectangle2.shapeColor=color("green");

	rectangle3=createSprite(1290,535,20,260);
	rectangle3.shapeColor=color("green");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	ground = Bodies.rectangle(width/2, 670, width, 20 , {isStatic:true});
	World.add(world, ground);

	rectangle2 = Bodies.rectangle(1180,650,200,20,{isStatic:true});
	World.add(world,rectangle2);

	rectangle1 = Bodies.rectangle(1070,540,20,260,{isStatic:true});
	World.add(world,rectangle1);

	rectangle3 = Bodies.rectangle(1290,540,20,260,{isStatic:true});
	World.add(world,rectangle3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  paper.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:117,y:-117})
	}

}

