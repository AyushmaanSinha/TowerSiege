const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, polygon, slingshot;

var gameState = "onSling";

function preload(){
    polygon=loadImage("polygon.png"); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    stand1 = new Stand(400,300,250,10);
    stand2 = new Stand(700,200,200,10);

    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    //level two
    block8 = new Block(420,195,30,40);
    //top
    block9 = new Block(390,155,30,40);
    ball=Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new SlingShot(this.ball,{x:200, y:50});
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    Image(polygon,ball.position.x,ball.position.y,40,40);
    block1.display();
    block2.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}