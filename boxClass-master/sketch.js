const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;


function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,450,50,50);
    box2 = new Box(240,300,50,50);
    box3 = new Box(280,450,50,50);
    box4 = new Box(320,300,50,50);
    box5 = new Box(360,450,50,50);
    box6 = new Box(400,300,50,50);
    ground = new Ground(400,780,800,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   ground.display();
}