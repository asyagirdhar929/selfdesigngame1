var startButton;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var startButton,art,img,unicornnormal,unicornImg,unicorn_running;
var gameState=0;

function preload()
{
img=loadImage("bg.jpeg")
unicornImg=loadAnimation("1u.png","2u.png");
unicorn_running=loadAnimation("3u.png","4u.png","5u.png","6u.png","7u.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
unicornnormal=createSprite(10,760,10,10);
unicornnormal.addAnimation(unicornImg);
	

	Engine.run(engine);
  
}


function draw() {

  background("pink");

if (gameState=0)
{
	unicornnormal.hide();

}else if (gameState=1)
{
	
	if(keyDown (UP_ARROW))
	{
unicornnormal.addAnimation(unicorn_running);
drawSprites();
	}
}



  
 
}



