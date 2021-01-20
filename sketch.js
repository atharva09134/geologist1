
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	
	 ground = createSprite(400,590,800,20)
	 ground.shapeColor = "brown"

	hammer = createSprite(420,500,200,30)
	hammer.shapeColor = "yellow"

	 stone = createSprite(600,600,160,200)
	 stone.shapeColor = "black"
	 
	 s1 = createSprite(400,590,800,20)
	 s2 = createSprite(400,590,800,20)
	 s3 = createSprite(400,590,800,20)
	 s4 = createSprite(400,590,800,20)
	 s5 = createSprite(400,590,800,20)

	Engine.run(engine);
  
}


function draw() {
 
  
	background("skyblue");
  







  drawSprites();
 
}



